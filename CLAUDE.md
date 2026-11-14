# personal-website: notes for Claude

Next.js 15 static export (`output: "export"`, images unoptimized) for samjwright.com.
Pushing to `master` (there is no `main`) runs `.github/workflows` and deploys to GitHub Pages.

**Rule: for any change, run the site locally and look at it in a browser at both desktop and mobile
sizes before pushing, then check the live site the same way after the deploy.** See below.

## Where things live

- Work history: `app/data/workExperiences.tsx` (newest first). A current role has `endDate: null` and shows "Present".
- Education: `app/data/educationExperiences.tsx`.
- Sidebar (location, bio, skills, contact): `app/components/Sidebar.tsx`.
- Logos: `public/` (jpg/png/svg all work, shown in a 64 px circle with `object-cover`).
- Dates are stored as `yyyy-MM-dd` and formatted with `timeZone: "UTC"` in `app/components/Experience.tsx`.
  Without it, US visitors see every month one early (`new Date("2025-12-01")` is UTC midnight = Nov 30 in PT).

## Build and check locally before pushing

Node comes from Homebrew (`brew install node`; it is at `/opt/homebrew/bin`, which may not be on PATH in a non-login shell).

```sh
export PATH=/opt/homebrew/bin:$PATH
npm ci
npm run build          # type-checks and writes the static site to out/
cd out && python3 -m http.server 8765   # run in the background
```

Then check the page with Playwright at **desktop (1280×900) and mobile (iPhone 15)** sizes. Keep Playwright
**outside the repo** so it doesn't end up in `package.json`: it is installed in `~/.cache/site-check`
(`npm i playwright && npx playwright install chromium`). Its `shot.js` scrolls the page (so lazy-loaded logos
load), prints whether each expected string is on the page, broken images, horizontal overflow and console
errors for both sizes, and saves screenshots:

```sh
node ~/.cache/site-check/shot.js http://localhost:8765/ /tmp/site America/Los_Angeles "San Francisco, USA" "December 2025 - Present"
```

Arguments: URL, screenshot prefix, browser timezone, then any strings that should appear. It writes
`/tmp/site-{desktop,mobile}.png` (full page) and `/tmp/site-{desktop,mobile}-top.png` (first screen).
**Look at the screenshots**, not just the text checks. For date changes also run with `Australia/Melbourne`.
Stop the server afterwards (`pkill -f "http.server 8765"`).

After pushing and the deploy finishing, run the same check against `https://samjwright.com/?v=$RANDOM`.
