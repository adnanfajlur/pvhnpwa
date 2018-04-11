const workboxBuild = require('workbox-build');

workboxBuild.generateSW({
  globDirectory: './src',
  globPatterns: ['**\/*.{html,js,css}'],
  globIgnores: ['**/sw.js'],
  importWorkboxFrom: 'local',
  swDest: './src/sw.js',
  navigateFallback: '/',
  templatedUrls: {
    '/': ['index.html']
  }
}).then(({count, size}) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});