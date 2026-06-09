import re

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

svg_text = content.decode('utf-8', errors='ignore')
path_pattern = re.compile(r'<path\s+[^>]*?d=["\']([^"\']+)["\'][^>]*?>')

for m in path_pattern.finditer(svg_text):
    tag = m.group(0)
    d = m.group(1)
    if d.startswith('M189.08,59.02'):
        print(tag)
        break
