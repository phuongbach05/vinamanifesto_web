import os

replacements = {
    # Red gradient stops -> Green gradient stops
    '#ea8b88': '#a5d6a7',
    '#EA8B88': '#A5D6A7',
    '#eb4f52': '#4caf50',
    '#EB4F52': '#4CAF50',
    '#eb2a30': '#2e7d32',
    '#EB2A30': '#2E7D32',
    '#ec1c24': '#1b5e20',
    '#EC1C24': '#1B5E20',
    
    # Red stroke/border colors -> Green stroke/border colors
    '#87000a': '#0f4a1f',
    '#87000A': '#0F4A1F'
}

workspace = r"c:\Users\DELL\Downloads\vinamanifesto_web"

# List of files to modify
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
        for red, green in replacements.items():
            content = content.replace(red, green)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
        else:
            print(f"No changes in {filename}")
    else:
        print(f"File {filename} not found!")

# Process index.html
index_path = os.path.join(workspace, 'index.html')
if os.path.exists(index_path):
    print("Processing index.html...")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for red, green in replacements.items():
        content = content.replace(red, green)
        
    if content != original_content:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated index.html")
    else:
        print("No changes in index.html")
