import re

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

svg_text = content.decode('utf-8', errors='ignore')
path_pattern = re.compile(r'<path\s+[^>]*?d=["\']([^"\']+)["\'][^>]*?>')

for m in path_pattern.finditer(svg_text):
    d = m.group(1)
    if d.startswith('M189.08,59.02'):
        subpaths = ['M' + p.strip() for p in d.split('M') if p.strip()]
        sub0 = subpaths[0]
        # Parse coordinate pairs
        # Find all numbers
        numbers = [float(n) for n in re.findall(r'-?\d+\.?\d*', sub0)]
        print("Raw numbers in Subpath 0:")
        for idx in range(0, len(numbers)-1, 2):
            x = numbers[idx]
            y = numbers[idx+1] if idx+1 < len(numbers) else None
            print(f"({x}, {y})")
        break
