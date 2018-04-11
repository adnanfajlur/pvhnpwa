const workboxBuild = require('workbox-build');

workboxBuild.generateSW({
  globDirectory: './src',
  globPatterns: ['**\/*.{html,js,css}'],
  globIgnores: ['**/sw.js'],
  swDest: './src/sw.js',
  navigateFallback: '/',
  templatedUrls: {
    '/': ['index.html']
  }
})
.then(() => {
  console.log('Service worker generated.');
});