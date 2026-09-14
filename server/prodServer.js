// Production HTTP & WebSocket Server for Bharakhatta
// Serves optimized dist/ bundle with zero dev overhead, maximum mobile & PC reliability

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { setupMultiplayerServer } from "./multiplayerServer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = process.env.PORT || 5173;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2"
};

const server = http.createServer((req, res) => {
  // CORS & Mobile headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;
  if (reqPath === "/" || reqPath === "") {
    reqPath = "/index.html";
  }

  let filePath = path.join(DIST_DIR, reqPath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  // Fallback to index.html for SPA client routing
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, "index.html");
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000"
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

// Attach real-time multiplayer WebSocket server
setupMultiplayerServer(server);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n======================================================`);
  console.log(`🚀 BHARAKHATTA Production Server Live on Port ${PORT}`);
  console.log(`Local PC:   http://localhost:${PORT}/`);
  console.log(`Local WiFi: http://192.168.31.186:${PORT}/`);
  console.log(`WebSocket:  ws://localhost:${PORT}/ws`);
  console.log(`======================================================\n`);
});
