// Generates a standalone single-file HTML version of Bharakhatta with embedded CSS and JS
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const outputHtml = path.resolve(__dirname, "../bharakhatta_offline.html");

const assetFiles = fs.readdirSync(path.join(distDir, "assets"));
const jsFile = assetFiles.find(f => f.endsWith(".js"));
const cssFile = assetFiles.find(f => f.endsWith(".css"));

const css = fs.readFileSync(path.join(distDir, "assets", cssFile), "utf-8");
const js = fs.readFileSync(path.join(distDir, "assets", jsFile), "utf-8");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <title>BHARAKHATTA (బాఱఖట్టా) - Village Cowrie Board Game</title>
  <style>
${css}
  </style>
</head>
<body>
  <div id="app"></div>
  <script type="module">
${js}
  </script>
</body>
</html>`;

fs.writeFileSync(outputHtml, html);
console.log(`Created standalone ${outputHtml} (${(html.length / 1024).toFixed(1)} KB)`);
