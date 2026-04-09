import json
import re
import os

class LatexFormatter:
    def __init__(self):
        # Substitution map for symbols and letters
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
        
        # 1. Check if it likely contains math (equals sign, operations, or symbols)
        math_indicators = ['=', '+', '-', '*', '/', '^', '√', '²', '³', '(', ')', '\\']
        has_symbols = any(s in text for s in self.replacements.keys())
        has_operations = any(op in text for op in ['=', '√', '²', '³'])
        
        # If it's already LaTeX or contains math-like patterns, process it
        if has_symbols or has_operations:
            formatted = text
            for old, new in self.replacements.items():
                formatted = formatted.replace(old, new)
            
            # 2. Heuristic: Wrap in $ if not already wrapped
            # Only wrap if it looks like a formula (has equals or multiple symbols)
            if '=' in formatted or len(re.findall(r'\\[a-z]+', formatted)) > 1:
                if not formatted.strip().startswith('$'):
                    # Escape backslashes for JSON output (handled by json.dump usually, 
                    # but we represent them here as raw strings)
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
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        formatted_data = self.process_data(data)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            # indent=2 helps with readability, ensures double backslashes in string output
            json.dump(formatted_data, f, indent=2, ensure_ascii=False)

# Usage Example
if __name__ == "__main__":
    formatter = LatexFormatter()
    # Replace with your actual paths
    # formatter.run('input.json', 'formatted_output.json')
    print("LatexFormatter initialized. Ready to process files.")
