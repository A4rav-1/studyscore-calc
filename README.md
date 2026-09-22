# VCEcalc

A fast VCE study score and ATAR calculator using 2025 VCAA assessment weights,
VTAC scaling and aggregate tables, 2021–2025 VCAA school statistics, and the
2025 VCAA Honour Roll.

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

The refresh downloads the five official VCAA Senior Secondary Completion and
Achievement Information workbooks. Improving schools receive half of their
five-year annual median-study-score trend; stable and declining schools retain
their published 2025 median.

## GitHub Pages

The GitHub Pages workflow publishes the static build after each push to `main`.
Create the repository as `studyscore-calc`, enable Pages with GitHub
Actions as the source, then push this project to its `main` branch.
