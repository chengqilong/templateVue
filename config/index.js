'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


const fileOutputDir = require(resolveApp('package.json')).fileOutputDir; 
const copyHtmlFileOutputDirBase = require(resolveApp('package.json')).copyHtmlFileOutputDirBase;
const fileDir = require(resolveApp('package.json')).name;
const m_static_url = require(resolveApp('package.json')).m_static_url;
const mtest_static_url = require(resolveApp('package.json')).mtest_static_url;

const mob_static_url = require(resolveApp('package.json')).mob_static_url;


const appBuild = resolveApp(fileOutputDir + fileDir);
const appBuildHtml = copyHtmlFileOutputDirBase + fileDir + '/index.html'; //相对于appBuild


module.exports = {
  
  dev: {
    // Template for index.html
    index: appBuildHtml,

    // Paths
    assetsRoot: appBuild,
    assetsSubDirectory: 'static',
    assetsPublicPath: mob_static_url + fileDir,

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run dev --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  test: {
    // Template for index.html
    index: appBuildHtml,
    // Paths
    assetsRoot: appBuild,
    assetsSubDirectory: 'static',
    assetsPublicPath: mtest_static_url + fileDir,

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run test_env --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }, 

  build: {
    // Template for index.html
    index: appBuildHtml,

    // Paths
    assetsRoot: appBuild,
    assetsSubDirectory: 'static',
    assetsPublicPath: m_static_url + fileDir,

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
