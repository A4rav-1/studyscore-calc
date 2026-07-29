# VCEcalc

A fast VCE study score and ATAR calculator using 2025 VCAA assessment weights,
VTAC scaling and aggregate tables, and Better Education school statistics.

## Commands

```bash
npm install
npm run dev
npm test
```

Refresh the bundled school dataset with:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\refresh-school-data.ps1
```

## GitHub Pages

The GitHub Pages workflow publishes the static build after each push to `main`.
Create the repository as `studyscore-calc`, enable Pages with GitHub
Actions as the source, then push this project to its `main` branch.
