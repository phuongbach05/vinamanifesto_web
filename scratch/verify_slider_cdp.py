import base64
import json
import os
import shutil
import socket
import struct
import subprocess
import time
import urllib.request


ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
INDEX_URL = 'file:///' + os.path.join(ROOT, 'index.html').replace('\\', '/')


def find_chrome():
    candidates = [
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
        r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    ]
    for path in candidates:
        if os.path.exists(path):
            return path
    raise RuntimeError('Chrome/Edge executable not found')


def free_port():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


class CdpSocket:
    def __init__(self, ws_url):
        _, rest = ws_url.split('://', 1)
        host_port, path = rest.split('/', 1)
        host, port = host_port.split(':')
        self.sock = socket.create_connection((host, int(port)), timeout=5)
        self.sock.settimeout(30)
        key = base64.b64encode(os.urandom(16)).decode('ascii')
        request = (
            f'GET /{path} HTTP/1.1\r\n'
            f'Host: {host_port}\r\n'
            'Upgrade: websocket\r\n'
            'Connection: Upgrade\r\n'
            f'Sec-WebSocket-Key: {key}\r\n'
            'Sec-WebSocket-Version: 13\r\n\r\n'
        )
        self.sock.sendall(request.encode('ascii'))
        response = b''
        while b'\r\n\r\n' not in response:
            response += self.sock.recv(4096)
        if b' 101 ' not in response.split(b'\r\n', 1)[0]:
            raise RuntimeError('WebSocket upgrade failed')
        self.next_id = 1

    def send(self, method, params=None):
        msg_id = self.next_id
        self.next_id += 1
        payload = json.dumps({'id': msg_id, 'method': method, 'params': params or {}}).encode('utf-8')
        header = bytearray([0x81])
        length = len(payload)
        if length < 126:
            header.append(0x80 | length)
        elif length < 65536:
            header.append(0x80 | 126)
            header.extend(struct.pack('!H', length))
        else:
            header.append(0x80 | 127)
            header.extend(struct.pack('!Q', length))
        mask = os.urandom(4)
        header.extend(mask)
        masked = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
        self.sock.sendall(header + masked)
        return msg_id

    def recv_json(self):
        while True:
            first = self.sock.recv(2)
            if not first:
                raise RuntimeError('WebSocket closed')
            opcode = first[0] & 0x0F
            length = first[1] & 0x7F
            if length == 126:
                length = struct.unpack('!H', self.sock.recv(2))[0]
            elif length == 127:
                length = struct.unpack('!Q', self.sock.recv(8))[0]
            if first[1] & 0x80:
                mask = self.sock.recv(4)
            else:
                mask = None
            payload = b''
            while len(payload) < length:
                payload += self.sock.recv(length - len(payload))
            if mask:
                payload = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
            if opcode == 1:
                return json.loads(payload.decode('utf-8'))
            if opcode == 8:
                raise RuntimeError('WebSocket closed')

    def call(self, method, params=None):
        msg_id = self.send(method, params)
        while True:
            message = self.recv_json()
            if message.get('id') == msg_id:
                return message

    def close(self):
        self.sock.close()


def main():
    port = free_port()
    user_data = r'C:\tmp\vina-slider-verify'
    if os.path.exists(user_data):
        shutil.rmtree(user_data, ignore_errors=True)
    os.makedirs(user_data, exist_ok=True)

    chrome = find_chrome()
    process = subprocess.Popen([
        chrome,
        '--headless=new',
        '--disable-gpu',
        '--disable-background-networking',
        '--host-resolver-rules=MAP fonts.googleapis.com 127.0.0.1,MAP fonts.gstatic.com 127.0.0.1',
        '--host-resolver-retry-attempts=0',
        f'--remote-debugging-port={port}',
        f'--user-data-dir={user_data}',
        '--window-size=1066,700',
        INDEX_URL,
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    try:
        tabs = None
        for _ in range(80):
            try:
                with urllib.request.urlopen(f'http://127.0.0.1:{port}/json', timeout=0.2) as response:
                    tabs = json.loads(response.read().decode('utf-8'))
                if tabs:
                    break
            except Exception:
                time.sleep(0.1)
        if not tabs:
            raise RuntimeError('Could not connect to Chrome')

        ws_url = tabs[0]['webSocketDebuggerUrl']
        cdp = CdpSocket(ws_url)
        try:
            cdp.call('Page.enable')
            cdp.call('Runtime.enable')
            cdp.call('Page.navigate', {'url': INDEX_URL})
            time.sleep(1.5)
            expression = r"""
(() => new Promise((resolve) => {
  const started = performance.now();
  const measure = () => {
    const panel = document.getElementById('infoPanel');
    const wrap = document.getElementById('modalSliderWrap');
    const container = document.getElementById('modalCardsContainer');
    const prev = document.getElementById('sliderPrevBtn');
    const next = document.getElementById('sliderNextBtn');

    if (!panel || !wrap || !container) {
      if (performance.now() - started > 5000) {
        resolve({ error: 'slider DOM not found' });
      } else {
        setTimeout(measure, 100);
      }
      return;
    }

    panel.classList.add('open', 'is-branch-view');
    wrap.style.display = 'flex';
    if (prev) {
      prev.style.display = 'flex';
      prev.style.visibility = 'hidden';
    }
    if (next) {
      next.style.display = 'flex';
      next.style.visibility = 'visible';
    }
    container.style.justifyContent = 'flex-start';
    container.innerHTML = Array.from({ length: 3 }, (_, index) => `
      <div class="topic-card">
        <div class="card-header red-bg">
          <div class="card-title-main-wrap">
            <div class="card-title-main">Card ${index + 1}</div>
            <div class="card-title-main-script">Card ${index + 1}</div>
          </div>
        </div>
        <div class="card-image-placeholder"></div>
      </div>
    `).join('');

    requestAnimationFrame(() => {
      const container = document.getElementById('modalCardsContainer');
      const cards = [...container.querySelectorAll('.topic-card')];
      const containerRect = container.getBoundingClientRect();
      const measurements = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return {
          left: Math.round(rect.left - containerRect.left),
          right: Math.round(rect.right - containerRect.left),
          width: Math.round(rect.width),
          visible: rect.left >= containerRect.left - 1 && rect.right <= containerRect.right + 1
        };
      });
      resolve({
        containerWidth: Math.round(containerRect.width),
        cardCount: cards.length,
        visibleFully: measurements.filter((card) => card.visible).length,
        measurements
      });
    });
  };
  measure();
}))()"""
            result = cdp.call('Runtime.evaluate', {
                'expression': expression,
                'awaitPromise': True,
                'returnByValue': True,
            })
            payload = result.get('result', {}).get('result', {}).get('value')
            print(json.dumps(payload if payload is not None else result, indent=2))
        finally:
            cdp.close()
    finally:
        process.terminate()
        try:
            process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            process.kill()
        shutil.rmtree(user_data, ignore_errors=True)


if __name__ == '__main__':
    main()
