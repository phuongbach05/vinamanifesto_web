import re
import os

with open('Vinabiennale.svg', 'rb') as f:
    content = f.read()

# Find occurrences of the divider lines
pos_line1 = content.find(b'x1="302.9"')
pos_line2 = content.find(b'x1="504.54"')
print(f"Line 1 pos: {pos_line1}, Line 2 pos: {pos_line2}")

if pos_line1 != -1 and pos_line2 != -1:
    start_pos = min(pos_line1, pos_line2) - 4000
    end_pos = max(pos_line1, pos_line2) + 4000
    os.makedirs('scratch', exist_ok=True)
    with open('scratch/dividers_extracted.txt', 'wb') as f_out:
        f_out.write(content[start_pos:end_pos])
    print(f"Extracted from {start_pos} to {end_pos} to scratch/dividers_extracted.txt")
else:
    print("Could not find the dividers in the file.")
