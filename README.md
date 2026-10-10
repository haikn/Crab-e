# Krabtec 🦀

Playful React + Vite SPA: an animated crab face greets you, speaks
"Hey, I am Krabtec. Scan the QR code to talk to me.", then reveals a QR code and
a set of use-case cards (Idea Snap, Market Snap, Strategy Snap). See [PLAN.md](PLAN.md).

Flow: `intro` → `qr` → `case_select` → `case_active` (Home button returns to the QR screen).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs ./dist
npm run preview
```

Speech uses the browser Web Speech API; if unavailable the subtitle is still shown.
Some browsers require a click first — use the "Wake Krabtec" button.

## Deploy on Render (static site)

Option A – Blueprint: push the repo, in Render choose **New → Blueprint** and select it; `render.yaml` is used.

Option B – manual: **New → Static Site**, then set
- Build command: `npm install && npm run build`
- Publish directory: `dist`
