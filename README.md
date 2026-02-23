<<<<<<< HEAD
You are an experienced frontend engineer and product thinker.
You are building a HIGH-FIDELITY PROTOTYPE (not a production app) for a JEE Physics learning tool.

This is NOT a backend-heavy or scalable system.
No authentication, no database, no APIs.
All data can be mocked or stored locally (in-memory or localStorage).

────────────────────────
PURPOSE OF THE APP
────────────────────────
The app helps JEE aspirants revise Physics topics by:
- Eliminating decision fatigue (what to revise, what difficulty)
- Preventing false confidence
- Serving level-appropriate questions automatically
- Encouraging honest self-assessment without judgement

The app does NOT try to:
- Teach theory from scratch
- Replace coaching platforms
- Gamify learning
- Provide social interaction

It is a focused revision and practice tool.

────────────────────────
TARGET USER
────────────────────────
- JEE aspirant studying from online coaching
- Has already studied theory
- Struggles with:
  - Mixed difficulty in DPPs/modules
  - Overestimating understanding
  - Wasting time deciding “what to do next”

────────────────────────
TECH STACK (STRICT)
────────────────────────
Frontend only. Choose ONE of the following:
- React (preferred) with Vite

Do NOT use:
- Next.js
- Backend frameworks
- Firebase, Supabase, Auth
- AI APIs
- Chart libraries (simple UI only)

Styling:
- Tailwind CSS

State management:
- React state / context OR simple JS objects
- Optional: localStorage for session persistence

────────────────────────
APP STRUCTURE
────────────────────────

SCREENS (IN ORDER):

1. HOME
- Simple entry screen
- Shows:
  - Subject card: Physics (only enabled one)
  - “Resume last session” if available

2. TOPIC SELECTION
- Physics → Newton’s Laws of Motion
- Only ONE topic unlocked initially:
  - “Free Body Diagrams & Net Force”
- Other topics shown as locked placeholders

3. RAPID REVISION (FLASHCARDS)
- Max 5 flashcards
- One-line, physics-specific:
  - Formula conditions
  - Common traps
  - Direction/sign rules
- Linear flow (no complex navigation)
- Button at end: “Start Checkpoint”

4. FOUNDATION CHECKPOINT (MANDATORY)
- Exactly 3 questions
- Basic force-identification and reasoning
- No skipping
- Used ONLY to detect false confidence

5. CONFIDENCE + ADAPTATION
- Confidence slider (1–5)
- If:
    checkpoint score < 2/3 AND confidence ≥ 4
  Then:
    show a neutral warning message
    explain that questions will be adjusted
- User always proceeds (no blocking)

6. PRACTICE SESSION
- Max 15 questions
- Question pool is pre-tagged:
  - Foundation (F)
  - Core (C)
  - Stretch (S)
- Question mix depends on confidence + checkpoint
- Foundation questions NEVER fully disappear
- No skip button
- Immediate feedback + short solution

7. SESSION SUMMARY
- Show:
  - Accuracy by category (F / C / S)
  - Confidence before → after
  - One auto-generated diagnostic sentence
- Buttons:
  - “Revise weak area”
  - “Stop for now”

────────────────────────
QUESTION LOGIC (IMPORTANT)
────────────────────────
- Use ONE question pool per topic
- Each question object includes:
  - id
  - text
  - options
  - correctAnswer
  - tag (F / C / S)
  - shortExplanation

Example adaptation logic:
- Confidence 1–2 → mostly F + C
- Confidence 3 → balanced
- Confidence 4–5 → more C + S
- If checkpoint weak → cap Stretch questions

This logic should be clearly implemented in code.

────────────────────────
NON-GOALS (DO NOT BUILD)
────────────────────────
- Login / signup
- Leaderboards or streaks
- Chat or social features
- AI-generated questions
- Full syllabus navigation
- Video lectures
- Motivation quotes or gamification

────────────────────────
QUALITY BAR
────────────────────────
- Code should be readable and modular
- UI should be minimal and distraction-free
- Prioritize correct learning flow over visuals
- Hardcode sample data where necessary
- This is a prototype to validate learning behavior, not a final product

Build the prototype accordingly.
=======
# ReviseIt
>>>>>>> 38ef9bcd9c724725276be5b68343dec350b06c68
