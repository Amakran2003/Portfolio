module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{js,css,html,png,jpg,svg}"
  ],
  swDest: "dist/sw.js",
  clientsClaim: true,
  skipWaiting: true
};
