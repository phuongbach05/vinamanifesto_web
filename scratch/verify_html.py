import xml.etree.ElementTree as ET

try:
    # We will try parsing index.html as XML. 
    # HTML5 might have unclosed tags, so we can check if it parses or read it.
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Since HTML5 might have unclosed tags like <!doctype>, <img>, etc.,
    # we can isolate the <svg> element and verify it parses cleanly as XML.
    import re
    svg_match = re.search(r'<svg.*?</svg>', content, re.DOTALL)
    if svg_match:
        svg_content = svg_match.group(0)
        # Parse it!
        ET.fromstring(svg_content)
        print("Success: SVG parses cleanly as valid XML!")
    else:
        print("Error: Could not locate <svg> element in index.html.")
except Exception as e:
    print(f"XML Parsing Error in index.html: {e}")
