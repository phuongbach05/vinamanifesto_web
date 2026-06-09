import json
import os

log_file = r"C:\Users\DELL\.gemini\antigravity\brain\c2a15d03-9f9a-439c-b198-a4a8934e2ec2\.system_generated\logs\transcript.jsonl"

targets = ['mountaincd.svg', 'mountaine.svg', 'mountainf.svg', 'mountaing.svg', 'mountainh.svg', 'mountaini.svg', 'mountainj.svg']

if os.path.exists(log_file):
    print("Log file found. Searching older entries...")
    with open(log_file, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f):
            if line_num >= 2800: # skip current run
                continue
            try:
                obj = json.loads(line)
                content = str(obj)
                for t in targets:
                    if t in content:
                        print(f"Line {line_num}: found '{t}'")
                        content_str = obj.get('content', '') or ''
                        if not content_str:
                            content_str = str(obj.get('tool_calls', ''))
                        snippet = content_str[:150].replace('\n', ' ')
                        print(f"  Snippet: {snippet}")
                        break
            except Exception as e:
                pass
else:
    print("Log file not found.")
