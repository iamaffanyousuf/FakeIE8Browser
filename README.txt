Fake Internet Explorer 8 - Electron Portable EXE (Ready-to-Build)

What this repo contains
- An Electron app that mimics Internet Explorer 8 UI (classic blue titlebar, toolbar) and embeds Chromium (via Electron) to load modern sites like YouTube.
- A GitHub Actions workflow that builds a Windows portable EXE using electron-builder and uploads the .exe as an artifact.
- Minimal assets (placeholder icon).

Two ways to get a ready EXE (pick one)

A) No SDK on your PC — use GitHub Actions (recommended if you don't want to install anything)
1. Create a new GitHub repository and upload the entire contents of this folder.
2. Push to GitHub (or click "Actions" > "Run workflow" > "Build Windows Portable EXE").
3. The workflow runs on windows-latest, builds the portable EXE, and uploads it as an artifact.
4. Download the artifact from the workflow run (Actions tab) — that's your ready-to-run EXE. No local SDK required on your PC.

B) Build locally on Windows (requires Node & npm) — minimal setup
1. Install Node.js (LTS) on your Windows PC: https://nodejs.org/
2. Open PowerShell, cd to the project folder.
3. Run:
   npm install
   npm run dist
4. The built EXE will be in the dist folder (electron-builder produces the portable EXE).

Notes & tweaks
- The app's window title & product name are set to "Internet Explorer". Change productName and appId in package.json if desired.
- The UI is an HTML fake-frame to mimic IE8 look. You can replace assets/ie_icon.png with a real IE icon .ico if you want.
- For maximum compatibility the workflow uses Node 18 and electron-builder. You can change node version in the workflow file.