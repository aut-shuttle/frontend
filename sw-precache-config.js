module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)'
    ],
    importScripts: [
        'background-sync.js'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
  };