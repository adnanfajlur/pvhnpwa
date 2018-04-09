module.exports = {
  globDirectory: './src',
  "globPatterns": [
    "**/*.{png,ico,html,js,json}"
  ],
  globIgnores: ['**/sw.js'],
  swDest: './src/sw.js',
  navigateFallback: '/',
  templatedUrls: {
    '/': ['index.html']
  },
};