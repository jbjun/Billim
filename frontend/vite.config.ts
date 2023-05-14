// 외부모듈
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// TODO 이미지 임시로 사용중 추후 교체해야 함.
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "iOS-120x120.png",
        "iOS-152x152.png",
        "iOS-167x167.png",
        "iOS-180x180.png",
        "AOS-192x192.png",
        "splash-1.png",
      ],
      manifest: {
        name: "빌림",
        short_name: "빌림",
        description: "필요한걸 내주변에서 빌리자",
        display: "standalone",
        theme_color: "#ffffff",
        icons: [
          {
            src: "AOS-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: false, // dev 환경에서 서비스 사용 유무
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    proxy: {
      "/socket.io": {
        target: "ws://localhost:8080",
        rewrite: (path) => path.replace(/^\/socket.io/, ""),
        ws: true,
      },
    },
  },
});
