# STATUS

## What was built

A freebies directory of free and free-tier AI video tools for editing, captioning, thumbnails, and enhancement, published by Asdale Dynamics, LLC.

Files:
- `index.html` — static HTML site with client-side search and category filters (vanilla JS, no build step, no tracking; works as `file://` via embedded fallback data or over HTTP fetching `tools.json`)
- `tools.json` — structured data: 16 listings (Editing: 5, Captioning: 4, Thumbnails: 4, Enhancement: 3), each with cost, platform, steps, official link
- `tools.md` — Markdown version of all listings with beginner step-by-step guides
- `README.md` — beginner-friendly project README crediting Asdale Dynamics, LLC; how to run and how to self-test
- `LICENSE` — MIT License, Copyright (c) 2026 Asdale Dynamics, LLC
- `verify.js` — Node.js self-test that validates tools.json, required fields, https links, categories, embedded fallback data, Asdale credits, exact LICENSE copyright line, and absence of affiliate/tracking links
- `STATUS.md` — this file

Each listing: cost, platform, steps, official link. No affiliate links; every link points to the tool's official website. Credit: Asdale Dynamics, LLC in README.md, tools.md, index.html footer, and LICENSE copyright line.

## How to run

Open `index.html` in any modern browser. Search and filters run client-side. Optionally serve locally:

```bash
python3 -m http.server
# open http://localhost:8000
```

## Verification results

`node verify.js` — all checks passed:

- tools.json is valid JSON with 16 tools across 4 categories (Editing, Captioning, Thumbnails, Enhancement)
- every listing has name, category, cost, platform, steps, and an https official link
- index.html serves HTTP 200 via `python3 -m http.server`
- tools.json serves HTTP 200 and parses remotely
- inline app script passes `node --check` syntax validation
- index.html has embedded fallback data (works as `file://`)
- LICENSE line exactly: `Copyright (c) 2026 Asdale Dynamics, LLC`
- README.md credits Asdale Dynamics, LLC
- no affiliate/referral/UTM/tracking links detected (only the intentional "No affiliate links" disclaimer text)

## Known gaps

- Free tiers and pricing change over time; listings were accurate as of build date (2026-10-28) but should be re-checked periodically
- Watermarked free-tier exports are noted per listing where applicable
- Whisper requires ffmpeg installed separately (noted in steps)
- No CI workflow (`.github/workflows` deliberately not added per instructions)
