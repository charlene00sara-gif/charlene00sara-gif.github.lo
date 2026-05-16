# Charlene — Personal Site

React + Vite portfolio. Hosted on [GitHub Pages](https://charlene00sara-gif.github.io/) via the `/docs` folder.

## Develop

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

**User site** (`charlene00sara-gif.github.io` → https://charlene00sara-gif.github.io/):

```bash
npm run build:pages
git add docs
git commit -m "chore: update GitHub Pages build"
git push
```

**Project site** (`charlene00sara-gif.github.lo`):

```bash
npm run build:pages:lo
git add docs && git commit -m "chore: update Pages build" && git push
```

In the repo **Settings → Pages**, set **Source** to **Deploy from a branch**, branch **main**, folder **/docs**.

Create the user-site repo on GitHub if needed: **New repository** → name `charlene00sara-gif.github.io` (must match exactly).
