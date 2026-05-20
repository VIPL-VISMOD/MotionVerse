# MotionVerse Project Page

Static project page modeled after [M3GPT](https://luomingshuang.github.io/M3GPT/) and the
[Nerfies](https://nerfies.github.io/) template.

## Local preview

```bash
cd MotionVerse
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

Target URL: `https://luomingshuang.github.io/MotionVerse/`

1. Create a new GitHub repo named `MotionVerse` under the `luomingshuang` account.
2. From this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial MotionVerse project page"
   git branch -M main
   git remote add origin git@github.com:luomingshuang/MotionVerse.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Branch: `main` / root** → Save.
4. Wait ~1 min, then visit `https://luomingshuang.github.io/MotionVerse/`.

## What to fill in

| Placeholder | Where | What to replace |
|---|---|---|
| Authors / affiliations | `index.html` hero section | Real names, links, sup numbers |
| arXiv / Data buttons | `index.html` hero links | Real URLs |
| Abstract | `index.html` Abstract section | Paper abstract |
| Pipeline figure | `static/images/pipeline.png` | Add the actual image file |
| YouTube ID | `index.html` Video section | Replace `REPLACE_VIDEO_ID` |
| Demo videos | `static/videos/*.mp4` | Drop in real mp4 files (filenames already wired) |
| BibTeX | `index.html` BibTeX section | Final citation |

## Structure

```
MotionVerse/
├── index.html
├── README.md
└── static/
    ├── css/index.css
    ├── js/index.js
    ├── images/         (add pipeline.png and other figures)
    └── videos/         (add demo mp4s here)
```
