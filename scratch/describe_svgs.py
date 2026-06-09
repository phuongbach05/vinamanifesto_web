import os
import xml.etree.ElementTree as ET

svg_files = ['mountaincd.svg', 'mountaine.svg', 'mountainf.svg', 'mountaing.svg', 'mountainh.svg', 'mountaini.svg', 'mountainj.svg']

for f in svg_files:
    if not os.path.exists(f):
        print(f"{f} does not exist")
        continue
    try:
        tree = ET.parse(f)
        root = tree.getroot()
        # Find paths
        paths = root.findall('.//{http://www.w3.org/2000/svg}path')
        images = root.findall('.//{http://www.w3.org/2000/svg}image')
        use_tags = root.findall('.//{http://www.w3.org/2000/svg}use')
        print(f"{f}: viewBox={root.attrib.get('viewBox')}, paths={len(paths)}, images={len(images)}, uses={len(use_tags)}")
    except Exception as e:
        print(f"Error parsing {f}: {e}")
