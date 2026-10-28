# STATUS

## What was built

A freebies directory of free and free-tier AI video tools for editing, captioning, thumbnails, and enhancement, published by Asdale Dynamics, LLC.

Files:
- `index.html` — static HTML site with client-side search and category filters (vanilla JS, no build step, no tracking)
- `tools.json` — structured data: 16 listings (Editing: 5, Captioning: 4, Thumbnails: 4, Enhancement: 3), each with cost, platform, steps, official link
- `tools.md` — Markdown version of all listings with beginner step-by-step guides
- `README.md` — project README crediting Asdale Dynamics, LLC; how to run
- `LICENSE` — MIT License, Copyright (c) 2026 Asdale Dynamics, LLC
- `STATUS.md` — this file

Each listing: cost, platform, steps, official link. No affiliate links; every link points to the tool's official website. Credit: Asdale Dynamics, LLC in README.md, tools.md, index.html, footer, and LICENSE copyright line.

## How to run

Open `index.html` in any modern browser. Search and filters run client-side. Optionally serve locally:

```bash
python3 -m http.server
# open http://localhost:8000
```

## Verification results

- `tools.json` is valid JSON with 16 tools across 4 categories
- `index.html` serves with HTTP 200 via `python3 -m http.server`
- `tools.json` serves with HTTP 200 and parses remotely
- Inline app script passes `node --check` syntax validation
- LICENSE line 3 exactly: `Copyright (c) 2026 Asdale Dynamics, LLC`
- README.md credits Asdale Dynamics, LLC
- No affiliate/referral/UTM links anywhere (only intentional "No affiliate links" disclaimer text)
- Site works both as `file://` (inline JSON fallback) and over HTTP (fetch of `tools.json`)

## Known gaps

- Free tiers and pricing change over time; listings were accurate as of build date (2026-10-28) but should be re-checked periodically
- No automated test suite; verification is manual (serve + curl + node syntax check)
- Watermarked free-tier exports are noted per listing where applicable
- Whisper requires ffmpeg installed separately (noted in steps)
