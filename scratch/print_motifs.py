import re

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

svg_text = content.decode('utf-8', errors='ignore')
path_pattern = re.compile(r'<path\s+[^>]*?d=["\']([^"\']+)["\'][^>]*?>')

prefixes = ['M301.54', 'M304.33', 'M502.77', 'M506.23']

for m in path_pattern.finditer(svg_text):
    tag = m.group(0)
    d_attr = m.group(1)
    
    for prefix in prefixes:
        if d_attr.startswith(prefix):
            print(f"--- MATCH {prefix} ---")
            print(tag)
            print()
