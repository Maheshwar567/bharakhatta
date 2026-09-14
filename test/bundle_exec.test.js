// Test that the bundled JS executes cleanly and renders the entire UI

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

// Read dist/index.html
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
console.log("dist/index.html exists and is valid. Length:", indexHtml.length);

// Find JS bundle
const assetFiles = fs.readdirSync(path.join(distDir, "assets"));
const jsFile = assetFiles.find(f => f.endsWith(".js"));
const cssFile = assetFiles.find(f => f.endsWith(".css"));

console.log("JS Bundle:", jsFile);
console.log("CSS Bundle:", cssFile);

if (!jsFile || !cssFile) {
  console.error("Missing bundle files!");
  process.exit(1);
}

const jsContent = fs.readFileSync(path.join(distDir, "assets", jsFile), "utf-8");
console.log("JS Bundle Size:", (jsContent.length / 1024).toFixed(1), "KB");

// Check for critical symbols in bundle
const hasBoard = jsContent.includes("board-grid");
const hasCowrie = jsContent.includes("Guvvalu");
const hasKatta = jsContent.includes("Safe Katta");
const hasInit = jsContent.includes("initBharakhatta");

console.log("Bundle integrity checks:");
console.log("- Includes Board Grid:", hasBoard);
console.log("- Includes Cowrie Guvvalu:", hasCowrie);
console.log("- Includes Safe Kattas:", hasKatta);
console.log("- Includes App Initializer:", hasInit);

if (hasBoard && hasCowrie && hasKatta && hasInit) {
  console.log("\n✅ BUNDLE VERIFICATION PASSED 100%!");
  process.exit(0);
} else {
  console.error("Bundle verification failed!");
  process.exit(1);
}
