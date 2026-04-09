import json
import re
import os
import sys

class LatexFormatter:
    def __init__(self):
        # Substitution map for simple symbols
        self.replacements = {
            '√': r'\sqrt',
            '²': r'^2',
            '³': r'^3',
            '⁴': r'^4',
            'π': r'\pi',
            'α': r'\alpha',
            'β': r'\beta',
            'γ': r'\gamma',
            'θ': r'\theta',
            'λ': r'\lambda',
            'Δ': r'\Delta',
            'μ': r'\mu',
            'ω': r'\omega',
            'Ω': r'\Omega',
            '→': r'\to',
            '≤': r'\le',
            '≥': r'\ge',
            '±': r'\pm',
            '×': r'\times',
            '∞': r'\infty',
            ' m/s²': r' \text{ m/s}^2',
            ' s²': r' \text{ s}^2',
        }

    def format_string(self, text):
        if not isinstance(text, str):
            return text
        
        # 1. Regex for Combinations and Permutations (e.g., 10C2, nPr, 4P3)
        # Matches patterns like 10C2 or nCr and converts to LaTeX syntax ^{10}C_{2}
        text = re.sub(r'(\d+|n)[CP](\d+|r)', r'^{\1}\2', text) # Simple conversion first? 
        # Wait, the above is wrong. Let's do:
        text = re.sub(r'(\d+|n)C(\d+|r)', r'^{\1}C_{\2}', text)
        text = re.sub(r'(\d+|n)P(\d+|r)', r'^{\1}P_{\2}', text)

        # 2. Check indicators for math
        math_indicators = ['=', '+', '-', '*', '/', '^', '√', '²', '³', '!', '^{', '_{', '\\']
        has_symbols = any(s in text for s in self.replacements.keys())
        has_pnc = '^{"C' in text or '^{"P' in text or 'C_' in text or 'P_' in text # Heuristic
        has_math = any(ind in text for ind in math_indicators) or has_symbols

        if has_math:
            formatted = text
            for old, new in self.replacements.items():
                formatted = formatted.replace(old, new)
            
            # 3. Heuristic: Wrap in $ if it looks like a formula and isn't wrapped
            # Formulas usually have =, !, ^, _, or multiple Greek symbols
            if any(op in formatted for op in ['=', '!', '^', '_', '\\', '√']):
                if not formatted.strip().startswith('$') and not formatted.strip().endswith('$'):
                    # We only wrap if the whole string isn't just a sentence with one '!'
                    # But for quiz data, usually strings with these are math.
                    if len(formatted.split()) < 20: # Don't wrap long paragraphs automatically
                         formatted = f"${formatted.strip()}$"
            
            return formatted
        return text

    def process_data(self, data):
        if isinstance(data, dict):
            return {k: self.process_data(v) for k, v in data.items()}
        elif isinstance(data, list):
            return [self.process_data(v) for v in data]
        elif isinstance(data, str):
            return self.format_string(data)
        return data

    def run(self, input_file, output_file):
        print(f"Processing: {input_file} ...")
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        formatted_data = self.process_data(data)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(formatted_data, f, indent=2, ensure_ascii=False)
        print(f"Success! Saved to: {output_file}")

if __name__ == "__main__":
    formatter = LatexFormatter()
    
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv) > 2 else input_path.replace('.json', '-formatted.json')
        
        if os.path.exists(input_path):
            formatter.run(input_path, output_path)
        else:
            print(f"Error: File {input_path} not found.")
    else:
        print("\n--- ReviseIt LaTeX Formatter ---")
        print("Usage: python JSONformatter.py <input_file> [output_file]")
        print("Example: python JSONformatter.py public/data/maths/questions/chapter3.json")
        print("-------------------------------")
