/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */

var _ = require('lodash');

module.exports = function(grunt) {

  grunt.config.set('concat', {
    // dependencies: {
    //   src: require('../pipeline').jsDependenciesToInject,
    //   dest: '.tmp/public/concat/dependencies.js'
    // },
    js: {
      src: _.flatten([require('../pipeline').jsDependenciesToInject,
            require('../pipeline').templateFilesToInject,
            require('../pipeline').jsFilesToInject]),
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
