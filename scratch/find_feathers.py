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
    
    # Check if this path's y coordinates are mostly between 20 and 55
    y_coords = [numbers[i+1] for i in range(0, len(numbers)-1, 2) if i+1 < len(numbers)]
    if not y_coords:
        continue
    
    avg_y = sum(y_coords) / len(y_coords)
    min_y = min(y_coords)
    max_y = max(y_coords)
    
    # Check if the path is in the timeline y-range (between 20 and 60)
    # and not one of the scroll motifs or text paths we already identified.
    # The scroll motifs we found are around x=301..316 and x=502..518.
    # Let's filter those out if they are exactly those.
    is_scroll = False
    for prefix in ['M301.54', 'M304.33', 'M502.77', 'M506.23']:
        if d.startswith(prefix):
            is_scroll = True
            break
            
    if 20 <= avg_y <= 60 and not is_scroll:
        # Check if the tag contains class cls-360 or similar
        matches.append((tag, min_y, max_y, d[:100]))

print(f"Found {len(matches)} matching paths near timeline y-range:")
for m in matches[:15]:
    print(f"Tag: {m[0][:150]}... (Y: {m[1]:.2f} to {m[2]:.2f}, D: {m[3]})")
