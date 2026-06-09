import os
import re

svg_files = [f for f in os.listdir('.') if f.endswith('.svg') and 'mountain' in f]
for f in svg_files:
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            content = fh.read()
            viewbox = re.search(r'viewBox=["\']([^"\']+)["\']', content)
            if viewbox:
                print(f"{f}: viewBox=\"{viewbox.group(1)}\"")
            else:
                print(f"{f}: no viewBox found")
    except Exception as e:
        print(f"Error reading {f}: {e}")
