import re
import os

svg_files = ['mountaincd.svg', 'mountaine.svg', 'mountainf.svg', 'mountaing.svg', 'mountainh.svg', 'mountaini.svg', 'mountainj.svg']

def get_bbox(svg_path):
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    d_list = re.findall(r'<path[^>]*d=["\']([^"\']+)["\']', content)
    
    bboxes = []
    for d in d_list:
        coords = re.findall(r'[-+]?\d*\.\d+|[-+]?\d+', d)
        if not coords:
            continue
        xs = [float(coords[i]) for i in range(0, len(coords)-1, 2)]
        ys = [float(coords[i+1]) for i in range(0, len(coords)-1, 2)]
        if xs and ys:
            bboxes.append((min(xs), max(xs), min(ys), max(ys)))
            
    # Group bboxes that are almost identical (representing the same peak)
    unique_bboxes = []
    for box in bboxes:
        # Check if we already have a box close to this one
        if not any(abs(box[0]-ub[0]) < 1.0 and abs(box[1]-ub[1]) < 1.0 and abs(box[2]-ub[2]) < 1.0 and abs(box[3]-ub[3]) < 1.0 for ub in unique_bboxes):
            unique_bboxes.append(box)
            
    unique_bboxes.sort(key=lambda b: b[0])
    return unique_bboxes

for f in svg_files:
    if os.path.exists(f):
        boxes = get_bbox(f)
        print(f"{f}: {len(boxes)} peaks")
        for i, b in enumerate(boxes):
            print(f"  Peak {i+1}: X=[{b[0]:.1f}, {b[1]:.1f}], Y=[{b[2]:.1f}, {b[3]:.1f}], W={b[1]-b[0]:.1f}, H={b[3]-b[2]:.1f}")
