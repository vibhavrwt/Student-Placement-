# Smart Placement Dashboard — GitHub Pages Edition

This is a static HTML/CSS/JavaScript edition made for GitHub Pages. It does not require Python, Flask, or a database server.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Open your GitHub repository `Student-Placement-`.
3. Upload `index.html` and the `assets` folder to the repository root (not the ZIP itself).
4. Commit the changes to the `main` branch.
5. Open **Settings → Pages** and select **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
6. Wait for the deployment, then open `https://vibhavrwt.github.io/Student-Placement-/`.

## Notes
- The stylesheet is linked with a relative path: `./assets/style.css`, which works on GitHub Pages project sites.
- Charts use Chart.js from a CDN and Google Fonts are optional styling enhancements, so internet access is needed for those external assets.
- The student profiles and opportunity chart are illustrative demo data. The search, add-sample, and BFS/DFS demonstration buttons run in the browser.
- GitHub Pages is static hosting; this edition does not save new profiles to a persistent database.
