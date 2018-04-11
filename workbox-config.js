const workboxBuild = require('workbox-build');

workboxBuild.generateSW({
  globDirectory: './public',
  globPatterns: ['**\/*.{html,js,css}'],
  globIgnores: ['**/sw.js'],
  swDest: './public/sw.js',
  navigateFallback: '/',
  templatedUrls: {
    '/': ['index.html']
  }
})
.then(() => {
  console.log('Service worker generated.');
});