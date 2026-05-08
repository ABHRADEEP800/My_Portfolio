import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      devOptions: {
        enabled: true,
        type: "module",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,webp}"],
        // Cache strategies for runtime resources
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      injectManifest: {
        swDest: "dist/sw.js",
      },
      manifest: {
        name: "Abhradeep Biswas — Portfolio",
        short_name: "AB Portfolio",
        description: "Portfolio of Abhradeep Biswas — Full-Stack Developer from Kolkata",
        theme_color: "#04040e",
        background_color: "#04040e",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "pwa-64x64.png",          sizes: "64x64",   type: "image/png" },
          { src: "pwa-192x192.png",         sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png",         sizes: "512x512", type: "image/png" },
          { src: "maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
    }),
  ],

  build: {
    // Raise the warning limit slightly (it's a portfolio, not an app)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libs into cacheable chunks
        manualChunks: {
          "vendor-router": ["react-router-dom"],
          "vendor-redux":  ["@reduxjs/toolkit", "react-redux"],
          "vendor-ui":     ["react-toastify", "react-simple-typewriter", "react-google-recaptcha-v3"],
        },
      },
    },
  },
});