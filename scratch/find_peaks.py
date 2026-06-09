import re
import os

svg_files = ['mountaincd.svg', 'mountaine.svg', 'mountainf.svg', 'mountaing.svg', 'mountainh.svg', 'mountaini.svg', 'mountainj.svg']

def extract_peaks(svg_path):
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all path 'd' attributes
    d_list = re.findall(r'<path[^>]*d=["\']([^"\']+)["\']', content)
    
    peaks = []
    for d in d_list:
        # Extract all coordinate pairs
        coords = re.findall(r'[-+]?\d*\.\d+|[-+]?\d+', d)
        if not coords:
            continue
        # Convert to floats
        points = []
        for i in range(0, len(coords)-1, 2):
            try:
                points.append((float(coords[i]), float(coords[i+1])))
            except ValueError:
                pass
        if points:
            # The peak is the point with the minimum Y coordinate
            peak = min(points, key=lambda p: p[1])
            peaks.append(peak)
    
    # Group peaks that are very close (since a single peak might have 3 paths/layers)
    unique_peaks = []
    for p in peaks:
        # Check if we already have a peak close to this one
        if not any(abs(p[0]-up[0]) < 2.0 and abs(p[1]-up[1]) < 2.0 for up in unique_peaks):
            unique_peaks.append(p)
            
    # Sort peaks by X coordinate
    unique_peaks.sort(key=lambda p: p[0])
    return unique_peaks

for f in svg_files:
    if os.path.exists(f):
        peaks = extract_peaks(f)
        print(f"{f}: {len(peaks)} peaks")
        for i, p in enumerate(peaks):
            print(f"  Peak {i+1}: x={p[0]:.1f}, y={p[1]:.1f}")
