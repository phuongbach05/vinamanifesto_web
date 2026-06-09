import xml.etree.ElementTree as ET

def dump_svg(filename):
    print(f"=== {filename} ===")
    tree = ET.parse(filename)
    root = tree.getroot()
    # Print root attributes
    print("Root attributes:", root.attrib)
    # Print children recursively
    def print_elem(elem, indent=0):
        # strip namespace
        tag = elem.tag.split('}')[-1] if '}' in elem.tag else elem.tag
        attrib = elem.attrib.copy()
        if 'd' in attrib:
            attrib['d'] = attrib['d'][:30] + '...' # truncate path data
        print('  ' * indent + f"<{tag} {attrib}>")
        for child in elem:
            print_elem(child, indent + 1)
    print_elem(root)

dump_svg('mountainj.svg')
dump_svg('mountaini.svg')
