# Free AI Video Tools Directory

A freebies directory of free and free-tier AI video tools — for editing, captioning, thumbnails, and enhancement. Each listing shows cost, platform, simple step-by-step instructions, and the official link. No affiliate links. Every link goes straight to the tool's own website.

Published by **Asdale Dynamics, LLC** (Indiana, formed October 2026) — beginner-friendly AI education, books, and guides. Founder Dylan Asdale is a registered nurse turned AI author who explains AI "like a friend would": plain English, step by step, never condescending.

## What's inside

| File | What it is |
|------|------------|
| `index.html` | Static website with client-side search and category filters. Open it in any browser — nothing uploads, nothing tracks. |
| `tools.json` | Structured data behind the site: 16 tools, each with cost, platform, steps, and official link. |
| `tools.md` | Markdown version of every listing with beginner step-by-step guides. |
| `LICENSE` | MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. |
| `STATUS.md` | What was built, how to run it, verification results, known gaps. |
| `verify.js` | Small script that checks the data and site are valid. Run it to self-test. |

## How to run

The site is plain HTML, CSS, and JavaScript. There is no build step and nothing to install.

**Option 1 — open directly**
Double-click `index.html` to open it in your browser. Search and filters work right away (the site falls back to its built-in data if it can't fetch `tools.json`).

**Option 2 — serve locally**
```bash
python3 -m http.server
# then open http://localhost:8000
```

## How to use

1. Browse the cards, or type in the search box to find a tool by name, cost, platform, or step.
2. Click a category chip (Editing, Captioning, Thumbnails, Enhancement) to show only that kind of tool.
3. Pick one tool, follow its steps, and make your first video.
4. Click "Official site" to go straight to the tool's website.

Costs and free-tier terms change over time — check each official site before relying on a free tier.

## Self-test

Run the verifier to confirm the data and site are valid:

```bash
node verify.js
```

It checks that `tools.json` is valid JSON, every listing has cost, platform, steps, and an official link, every link uses https, and `index.html` contains the embedded fallback data.

## About

Built and published by **Asdale Dynamics, LLC** — beginner-friendly AI education, books, and guides. Founder Dylan Asdale is a registered nurse turned AI author. Hub: https://dylanasdale.github.io

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.
