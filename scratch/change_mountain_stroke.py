import os

replacements = {
    # Specifically target stroke definitions in style blocks or attributes
    'stroke: #39ff14': 'stroke: #0a4c14',
    'stroke: #39FF14': 'stroke: #0a4c14',
    'stroke="#39ff14"': 'stroke="#0a4c14"',
    'stroke="#39FF14"': 'stroke="#0a4c14"'
}

workspace = r"c:\Users\DELL\Downloads\vinamanifesto_web"

svg_files = [
    'mountaina.svg',
    'mountainb.svg',
    'mountainbottom.svg',
    'mountainc.svg',
    'mountaincd.svg',
    'mountaine.svg',
    'mountainf.svg',
    'mountaing.svg',
    'mountainh.svg',
    'mountaini.svg',
    'mountaink.svg',
    'mountainl.svg',
    'mountainm.svg',
    'mountainn.svg',
    'mountaino.svg',
    'mountainp.svg',
    'mountainup.svg'
]

# Process SVGs
for filename in svg_files:
    filepath = os.path.join(workspace, filename)
    if os.path.exists(filepath):
        print(f"Processing {filename}...")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old_str, new_str in replacements.items():
            content = content.replace(old_str, new_str)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
        else:
            print(f"No changes in {filename}")

# Process index.html
index_path = os.path.join(workspace, 'index.html')
if os.path.exists(index_path):
    print("Processing index.html...")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for old_str, new_str in replacements.items():
        content = content.replace(old_str, new_str)
        
    if content != original_content:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated index.html")
    else:
        print("No changes in index.html")
