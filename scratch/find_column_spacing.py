import re

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

svg_text = content.decode('utf-8', errors='ignore')
path_pattern = re.compile(r'<path\s+[^>]*?d=["\']([^"\']+)["\'][^>]*?>')

# Let's find all x-coordinates for paths of class cls-360 where y is around 59.02
x_coords = []
for m in path_pattern.finditer(svg_text):
    d = m.group(1)
    # Check if it starts with M<X>,59.02 or close to 59.0
    match = re.match(r'^M(\d+\.?\d*),59\.02', d)
    if match:
        x_coords.append(float(match.group(1)))

x_coords.sort()
print(f"Found {len(x_coords)} columns at x-coordinates:")
print(x_coords)
print("Spacings between columns:")
for i in range(len(x_coords)-1):
    print(f"Spacing {i}: {x_coords[i+1] - x_coords[i]:.2f}")
