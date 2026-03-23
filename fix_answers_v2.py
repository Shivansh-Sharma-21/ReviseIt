
import re

file_path = r'd:\Code playground\ReviseIt\src\data\chemistry\questions\chapter2.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_block(match):
    block = match.group(0)
    
    # Target formats: "(a)", "(A)", "A", "a"
    # The regex matches "A" or "(A)" or "a" or "(a)" strictly.
    ans_match = re.search(r'correctAnswer:\s*["\'`]\(?([a-dA-D])\)?["\'`]', block)
    if not ans_match:
        return block
    
    letter = ans_match.group(1).lower()
    index = ord(letter) - ord('a')
    
    # Get options
    opt_match = re.search(r'options:\s*\[(.*?)\]', block, re.DOTALL)
    if not opt_match:
        return block
    
    opts_str = opt_match.group(1)
    # Extract options and remove surrounding quotes
    import re as inner_re
    # Match strings inside quotes, handling possible escaped quotes? 
    # For now, simple split or findall.
    opts = inner_re.findall(r'["\'`](.*?)["\'`]', opts_str)
    
    if index < len(opts):
        correct_text = opts[index]
        # Preserve the quote style if possible, or use double.
        # Let's use double quotes for the value.
        new_ans = f'correctAnswer: "{correct_text}"'
        # Replace the entire correctAnswer line (or just the value part)
        # We replace the specific pattern we found.
        block = re.sub(r'correctAnswer:\s*["\'`]\(?([a-dA-D])\)?["\'`]', new_ans, block)
    
    return block

# Match question objects {}
# This regex targets objects that have an 'id' and 'correctAnswer' field.
pattern = re.compile(r'\{[^{}]*?id:[^{}]*?text:[^{}]*?options:[^{}]*?\[[^{}]*?\][^{}]*?correctAnswer:[^{}]*?\}', re.DOTALL)

new_content = pattern.sub(replace_block, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Finished processing the entire file!")
