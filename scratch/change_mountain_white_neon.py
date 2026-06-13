import os

replacements = {
    # First stops -> White
    '#eaf2e5': '#ffffff',
    '#EAF2E5': '#FFFFFF',
    '#eaddd2': '#ffffff',
    '#EADDD2': '#FFFFFF',
    
    # Other stops -> #39ff14
    '#a6ff00': '#39ff14',
    '#A6FF00': '#39FF14',
    '#00e600': '#39ff14',
    '#00E600': '#39FF14',
    '#00b300': '#39ff14',
    '#00B300': '#39FF14',
    
    # Stroke outline -> #39ff14
    '#0a470f': '#39ff14',
    '#0A470F': '#39FF14'
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
        for old_col, new_col in replacements.items():
            content = content.replace(old_col, new_col)
            
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
    for old_col, new_col in replacements.items():
        content = content.replace(old_col, new_col)
        
    if content != original_content:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated index.html")
    else:
        print("No changes in index.html")
