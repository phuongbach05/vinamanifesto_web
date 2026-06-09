with open('script.js', 'r', encoding='utf-8') as fh:
    lines = fh.readlines()

results = []
for idx, line in enumerate(lines):
    if 'mountain' in line.lower() or 'mtn' in line.lower():
        results.append(f"Line {idx+1}: {line.strip()}")

with open('scratch/mountain_find_results.txt', 'w', encoding='utf-8') as out:
    out.write('\n'.join(results))

print("Search completed. Saved to scratch/mountain_find_results.txt.")
