import os

replacements = {
    # Current green -> Neon green stops
    '#a5d6a7': '#a6ff00',
    '#A5D6A7': '#A6FF00',
    '#4caf50': '#39ff14',
    '#4CAF50': '#39FF14',
    '#2e7d32': '#00e600',
    '#2E7D32': '#00E600',
    '#1b5e20': '#00b300',
    '#1B5E20': '#00B300',
    
    # Stroke outline
    '#0f4a1f': '#0a470f',
    '#0F4A1F': '#0A470F'
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
