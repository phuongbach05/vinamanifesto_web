const MAP_WIDTH=1700, MAP_HEIGHT=900;

function calc(screenW, screenH) {
  const aspect = screenW / screenH;
  const targetW = 900, targetH = 650;
  const targetAspect = targetW / targetH;
  let w, h;
  if (aspect > targetAspect) { h = targetH; w = h * aspect; }
  else { w = targetW; h = w / aspect; }
  if (h > MAP_HEIGHT) { h = MAP_HEIGHT; w = h * aspect; }
  if (w > MAP_WIDTH) { w = MAP_WIDTH; h = w / aspect; }
  const cx = 790, cy = MAP_HEIGHT / 2;
  let x = cx - w / 2, y = cy - h / 2;
  x = Math.max(0, Math.min(x, MAP_WIDTH - w));
  y = Math.max(0, Math.min(y, MAP_HEIGHT - h));
  console.log(screenW + 'x' + screenH + ' (aspect ' + aspect.toFixed(2) + '): viewBox=[' + x.toFixed(0) + ',' + y.toFixed(0) + ',' + w.toFixed(0) + ',' + h.toFixed(0) + '] x=' + x.toFixed(0) + '..' + (x+w).toFixed(0) + ' y=' + y.toFixed(0) + '..' + (y+h).toFixed(0));
}

console.log('--- Tablets & Phones ---');
calc(768, 1024);  // iPad portrait
calc(810, 1080);  // iPad Air portrait
calc(390, 844);   // iPhone 14
calc(414, 896);   // iPhone 14 Plus
calc(1024, 768);  // iPad landscape (but >1024 = desktop mode)
console.log('Nodes: 1(520,280) 2(500,600) 3(800,675) 4(1080,610) 5(1085,285)');
