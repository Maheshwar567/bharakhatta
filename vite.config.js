import { defineConfig } from "vite";
import { setupMultiplayerServer } from "./server/multiplayerServer.js";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "bharakhatta-multiplayer",
      configureServer(server) {
        if (server.httpServer) {
          setupMultiplayerServer(server.httpServer);
          console.log("🎮 Real-time multiplayer WebSocket attached to /ws");
        }
      }
    }
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: true
  }
});
