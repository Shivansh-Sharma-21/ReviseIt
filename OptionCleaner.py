import json
import re
import os
import sys

class OptionCleaner:
    def __init__(self):
        # Regex patterns to catch annotations like (a), a), A., 1), etc.
        self.annotation_patterns = [
            r'^\([a-zA-Z0-9]\)\s*',  # (a), (1)
            r'^[a-zA-Z0-9]\)\s*',     # a), 1)
            r'^[a-zA-Z0-9]\.\s*',     # a., A., 1.
            r'^Option\s*[a-zA-Z0-9]:?\s*', # Option A: 
        ]
        
        # Map for direct index matching
        self.index_map = {
            'a': 0, 'b': 1, 'c': 2, 'd': 3,
            '(a)': 0, '(b)': 1, '(c)': 2, '(d)': 3,
            'a)': 0, 'b)': 1, 'c)': 2, 'd)': 3,
            'a.': 0, 'b.': 1, 'c.': 2, 'd.': 3,
            'A': 0, 'B': 1, 'C': 2, 'D': 3,
            '(A)': 0, '(B)': 1, '(C)': 2, '(D)': 3,
            'A)': 0, 'B)': 1, 'C)': 2, 'D)': 3,
            'A.': 0, 'B.': 1, 'C.': 2, 'D.': 3,
            '1': 0, '2': 1, '3': 2, '4': 3,
            '(1)': 0, '(2)': 1, '(3)': 2, '(4)': 3,
        }

    def clean_text(self, text):
        if not isinstance(text, str):
            return text
        
        cleaned = text.strip()
        for pattern in self.annotation_patterns:
            cleaned = re.sub(pattern, '', cleaned)
        return cleaned.strip()

    def process_question(self, q):
        if 'options' not in q or 'correctAnswer' not in q:
            return q
        
        orig_options = q['options']
        orig_answer = q['correctAnswer'].strip()
        
        # 1. Check if the answer is a direct reference (e.g., "(a)")
        found_index = self.index_map.get(orig_answer)
        
        # 2. Clean all options
        cleaned_options = [self.clean_text(opt) for opt in orig_options]
        
        # 3. Update Answer
        if found_index is not None and found_index < len(cleaned_options):
            # Case: correctAnswer was "(b)" and we matched it to index 1
            new_answer = cleaned_options[found_index]
        else:
            # Case: correctAnswer was "Apple" or "(a) Apple"
            new_answer = self.clean_text(orig_answer)
            
        q['options'] = cleaned_options
        q['correctAnswer'] = new_answer
        return q

    def run(self, input_file, output_file):
        print(f"Cleaning options in: {input_file} ...")
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            cleaned_data = [self.process_question(q) for q in data]
        else:
            cleaned_data = data # Not a standard quiz list
            
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(cleaned_data, f, indent=2, ensure_ascii=False)
        print(f"Success! Saved to: {output_file}")

if __name__ == "__main__":
    cleaner = OptionCleaner()
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv) > 2 else input_path
        
        if os.path.exists(input_path):
            cleaner.run(input_path, output_path)
        else:
            print(f"Error: File {input_path} not found.")
    else:
        print("\n--- ReviseIt Option Cleaner ---")
        print("Usage: python OptionCleaner.py <input_file> [output_file]")
        print("-------------------------------")
