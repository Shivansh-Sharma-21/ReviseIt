
import re

file_path = r'd:\Code Playground\ReviseIt\src\data\chemistry\flashcards\chapter1.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove [span_X] and (end_span) tags
content = re.sub(r'\[span_\d+\]', '', content)
content = re.sub(r'\(end_span\)', '', content)

# 2. Refine LaTeX for Content
# Using string.replace for exact matches to avoid regex escape issues where not needed
replacements = [
    (r'√ν = a(Z - b)', r'$\sqrt{\nu} = a(Z - b)$'),
    (r'Z_effective = Z - σ', r'$Z_{\text{effective}} = Z - \sigma$'),
    (r'Shielding order: s > p > d > f', r'Shielding order: $s > p > d > f$'),
    (r'2 * {Int((N+2)/2)}^2', r'$2 \times \{Int(\frac{N+2}{2})\}^2$'),
    (r'ns^(1 to 2)', r'$ns^{1 \text{ to } 2}$'),
    (r'ns^2 np^(1 to 6)', r'$ns^2 np^{1 \text{ to } 6}$'),
    (r'(n-1)d^(1 to 10) ns^(1 to 2)', r'$(n-1)d^{1 \text{ to } 10} ns^{1 \text{ to } 2}$'),
    (r'ns^2 (n-1)d^(0 to 1) (n-2)f^(1 to 14)', r'$ns^2 (n-1)d^{0 \text{ to } 1} (n-2)f^{1 \text{ to } 14}$'),
    (r'd_AB = r_A + r_B - 0.09|X_A - X_B|', r'$d_{AB} = r_A + r_B - 0.09|X_A - X_B|$'),
    (r'Half of internuclear distance (d/2)', r'Half of internuclear distance ($d/2$)'),
    (r'IE1 < IE2 < IE3', r'$IE_1 < IE_2 < IE_3$'),
    (r'Δ_egH = -EA', r'$\Delta_{eg}H = -EA$'),
    (r'F > O > N/Cl', r'$F > O > N/Cl$'),
]

for old, new in replacements:
    content = content.replace(old, new)

# Individual substitutions
content = content.replace('Z_effective', '$Z_{\text{effective}}$')
content = content.replace(' σ ', ' $\sigma$ ')
content = content.replace(' ν ', ' $\nu$ ')
content = content.replace(' Z ', ' $Z$ ')
content = content.replace(' F- ', ' $F^-$ ')
content = content.replace('ns^2', '$ns^2$')
content = content.replace('F-', '$F^-$')

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Flashcards refined!")
