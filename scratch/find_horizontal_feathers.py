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
    
    y_coords = [numbers[i+1] for i in range(0, len(numbers)-1, 2) if i+1 < len(numbers)]
    x_coords = [numbers[i] for i in range(0, len(numbers)-1, 2)]
    if not y_coords or not x_coords:
        continue
    
    min_x = min(x_coords)
    max_x = max(x_coords)
    min_y = min(y_coords)
    max_y = max(y_coords)
    
    # Check if this path lies horizontally under the timeline
    # e.g., y is between 30 and 70
    if 30 <= min_y <= 70 and 30 <= max_y <= 70:
        matches.append((tag, min_x, max_x, min_y, max_y, d[:50]))

print(f"Found {len(matches)} horizontal paths under the timeline:")
# Group them by class or pattern to see if they repeat
for m in matches[:30]:
    print(f"Tag: {m[0][:120]}... (X: {m[1]:.1f} to {m[2]:.1f}, Y: {m[3]:.1f} to {m[4]:.1f}, D: {m[5]})")
