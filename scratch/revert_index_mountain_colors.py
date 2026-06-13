import os

workspace = r"c:\Users\DELL\Downloads\vinamanifesto_web"
index_path = os.path.join(workspace, 'index.html')

replacements = {
    # Gradient stops
    'stop-color="#FFFFFF"': 'stop-color="#eaf2e5"',
    'stop-color="#ffffff"': 'stop-color="#eaf2e5"',
    'stop-color="#39FF14"': 'stop-color="#ea8b88"', # Wait, offset 0.52, 0.74, 0.91, 1 had different colors!
    'stop-color="#39ff14"': 'stop-color="#ea8b88"',
}

# Wait, since the stops are defined sequentially in single lines like:
# <stop offset="0.17" stop-color="#FFFFFF"/><stop offset="0.24" stop-color="#FFFFFF"/><stop offset="0.52" stop-color="#39FF14"/><stop offset="0.74" stop-color="#39FF14"/><stop offset="0.91" stop-color="#39FF14"/><stop offset="1" stop-color="#39FF14"/>
# Or:
# <stop offset="0.17" stop-color="#ffffff"/><stop offset="0.24" stop-color="#ffffff"/><stop offset="0.52" stop-color="#39ff14"/><stop offset="0.74" stop-color="#39ff14"/><stop offset="0.91" stop-color="#39ff14"/><stop offset="1" stop-color="#39ff14"/>

# Let's perform a direct line-based or sequence-based replacement for this exact sequence!
target_sequence_1 = '<stop offset="0.17" stop-color="#FFFFFF"/><stop offset="0.24" stop-color="#FFFFFF"/><stop offset="0.52" stop-color="#39FF14"/><stop offset="0.74" stop-color="#39FF14"/><stop offset="0.91" stop-color="#39FF14"/><stop offset="1" stop-color="#39FF14"/>'
target_sequence_2 = '<stop offset="0.17" stop-color="#ffffff"/><stop offset="0.24" stop-color="#ffffff"/><stop offset="0.52" stop-color="#39ff14"/><stop offset="0.74" stop-color="#39ff14"/><stop offset="0.91" stop-color="#39ff14"/><stop offset="1" stop-color="#39ff14"/>'

replacement_sequence = '<stop offset="0.17" stop-color="#eaf2e5"/><stop offset="0.24" stop-color="#eaddd2"/><stop offset="0.52" stop-color="#ea8b88"/><stop offset="0.74" stop-color="#eb4f52"/><stop offset="0.91" stop-color="#eb2a30"/><stop offset="1" stop-color="#ec1c24"/>'

# Also let's replace the stroke colors in paths:
# stroke="#0a4c14" -> stroke="#87000a"

if os.path.exists(index_path):
    print("Reading index.html...")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace sequences
    content = content.replace(target_sequence_1, replacement_sequence)
    content = content.replace(target_sequence_2, replacement_sequence)
    
    # Replace strokes
    content = content.replace('stroke="#0a4c14"', 'stroke="#87000a"')
    content = content.replace('stroke="#0A4C14"', 'stroke="#87000A"')
    
    if content != original:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("index.html updated successfully!")
    else:
        print("No changes needed or matched in index.html!")
else:
    print("index.html not found!")
