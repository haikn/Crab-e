# Krabtec SPA Plan

## Vision
Build a playful single-page app (SPA) that acts as the digital mind of a physical crab installation.  
The experience starts with a funny animated crab face and guides users into interactive use cases via QR code and on-screen choices.

---

## Experience Flow (v1)

### 1) First Screen: Crab Face Intro
- Show a **funny crab face** centered on screen:
  - 2 animated eyes
  - 1 animated mouth
- The face should support simple **emotions**:
  - Neutral
  - Happy
  - Thinking
  - Surprised
- The crab can speak simple English lines.

#### First spoken line (required)
> “Hey, I am Krabtec. Scan the QR code to talk to me.”

- After the first line finishes, show a **QR code** on screen.
- Keep the face alive while QR is visible (blink, subtle movement).

---

### 2) QR Interaction Entry
- QR code opens a mobile-friendly chat/interaction page.
- On the main screen, show status text:
  - “Waiting for someone to connect…”
  - Then: “Connected” when a user scans.

---

### 3) Use Case Selection
After connection (or directly after intro in kiosk mode), show a list of **cases** users can choose from.

#### Initial cases (v1)
1. **Idea Snap**
   - User gives a business idea.
   - Krabtec returns a short concept summary.

2. **Market Snap**
   - User asks about market signal/trend.
   - Krabtec returns quick insight bullets.

3. **Strategy Snap**
   - User chooses a goal (growth, awareness, conversion).
   - Krabtec proposes 2–3 strategy options.

4. **Tool Legs**
   - Show crab “legs” as functional modules/teams.
   - User taps a leg to see what it can do.

5. **Quick Plan**
   - Turn user input into a simple 3-step action plan.

---

## Functional Requirements

### Crab Face
- Animated eyes:
  - Blink loop
  - Look-left/look-right (idle behavior)
- Animated mouth:
  - Open/close during speech playback
- Emotions mapped to states:
  - greeting -> happy
  - waiting -> neutral
  - processing -> thinking
  - success -> happy
  - error -> surprised

### Speech
- Text-to-speech (English) for short sentences.
- Speech queue for sequential lines.
- Fallback: display subtitles if audio unavailable.

### QR Code
- Generate dynamic QR for session/join URL.
- Show only after first intro sentence is completed.
- Session timeout + regenerate option.

### Cases UI
- Card-based case selector.
- Each case has:
  - title
  - short description
  - start button
- Return-to-home button always visible.

---

## Technical Plan

### Frontend
- React + Vite
- TailwindCSS for styling
- Framer Motion for face/emotion animation
- QR generation library (`qrcode` or `react-qr-code`)

### State
- Global state (Zustand):
  - appMode (`intro`, `qr_wait`, `case_select`, `case_active`)
  - emotion state
  - speech queue
  - session status

### Optional Backend (phase 2)
- Lightweight API for:
  - session creation for QR
  - chat/case logic
  - analytics events

---

## Screen Structure

1. **Intro Screen**
   - Crab face large
   - Subtitle text
   - Spoken greeting

2. **QR Screen**
   - Crab face + QR code
   - Connection status

3. **Case Selection Screen**
   - Grid/list of use case cards
   - Quick explanation panel

4. **Case Execution Screen**
   - Input area + output area
   - Crab reactions during processing

---

## UX & Tone
- Tone: playful, smart, short messages.
- Keep copy simple and friendly.
- Strong visual readability for event spaces (distance viewing).

---

## v1 Acceptance Criteria
- App loads to crab intro screen.
- Crab says: “Hey, I am Krabtec. Scan the QR code to talk to me.”
- QR appears automatically after intro line.
- User can reach and select at least 3 working cases.
- Crab face visibly changes emotion by state.

---

## Build Milestones

### Milestone 1: Intro + Face
- Static crab face
- Basic emotion switching
- First speech line + subtitle

### Milestone 2: QR + Session
- QR generation and display timing
- Connection state UI

### Milestone 3: Case Selector
- Case cards + navigation
- Implement 3 core cases

### Milestone 4: Polish
- Animation refinement
- Better transitions
- Event/demo autoplay mode

---

## Open Questions
- Should QR lead to a web chat or a messaging platform?
- Should multiple users join one session or one at a time?
- Should case results be saved/exported after demo?
