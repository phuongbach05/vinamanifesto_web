import re

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

svg_text = content.decode('utf-8', errors='ignore')
path_pattern = re.compile(r'<path\s+[^>]*?d=["\']([^"\']+)["\'][^>]*?>')

matches = []
for m in path_pattern.finditer(svg_text):
    tag = m.group(0)
    d = m.group(1)
    numbers = [float(n) for n in re.findall(r'-?\d+\.?\d*', d)]
    
    # Check for coordinates in [285, 320] for x, and [15, 35] for y
    near_302 = False
    near_504 = False
    for i in range(0, len(numbers)-1, 2):
        x = numbers[i]
        y = numbers[i+1] if i+1 < len(numbers) else 0
        if 280 <= x <= 325 and 15 <= y <= 35:
            near_302 = True
        if 485 <= x <= 525 and 15 <= y <= 35:
            near_504 = True
            
    if near_302 or near_504:
        matches.append((tag, near_302, near_504))

print(f"Found {len(matches)} matching paths near coordinates:")
for m in matches:
    print(f"Tag: {m[0][:180]}... (Near 302: {m[1]}, Near 504: {m[2]})")
