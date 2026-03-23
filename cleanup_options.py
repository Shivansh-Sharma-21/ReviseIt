import re
import os

def clean_chemistry_file(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # This regex matches prefixes like (A), (a), (1) followed by optional space at the start of a quoted string.
    # It captures the remaining text into group 2.
    pattern = re.compile(r'"\(([a-zA-Z0-9])\)\s*(.*?)"')

    lines = content.split('\n')
    new_lines = []
    
    changed = False
    for line in lines:
        # We only apply the cleanup to the 'options' and 'correctAnswer' fields to avoid false positives.
        if 'options:' in line or 'correctAnswer:' in line:
            new_line = pattern.sub(r'"\2"', line)
            if new_line != line:
                changed = True
            new_lines.append(new_line)
        else:
            new_lines.append(line)

    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        return True
    return False

if __name__ == "__main__":
    target_file = r'd:\Code playground\ReviseIt\src\data\chemistry\questions\chapter2.js'
    if clean_chemistry_file(target_file):
        print("Successfully removed prefixes from options and correct answers.")
    else:
        print("No prefixes were found to remove.")
