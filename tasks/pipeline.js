/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'vendor/**/*.css',
  'styles/**/*.css'
];


var jsDependenciesToInject = [
  /*
  * Order required dependencies
  */
  'js/dependencies/core/jquery/jquery.min.js',
  'js/dependencies/core/handlebars/handlebars.js',
  'js/dependencies/core/underscore/underscore.js',
  'js/dependencies/core/backbone/backbone.js',



  // The rest of the dependencies
  'js/dependencies/**/*.js'

];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',


  /*
  * Order required vendor
  */


  
  // The rest of the vendor files
  'vendor/**/*.js',



  /**********
  * Application specific requirements
  ***********/
  'js/libs/**/*.js',
  
  'js/application/application.js',
  'js/application/init.js',
  'js/application/router.js',
  'js/application/models/*.js',
  'js/application/collections/*.js',


  'js/application/**/*.js'

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  // 'js/**/*.js'
];


/********
* YOU CAN IGNORE THE NEXT COMMENT IF YOU SETUP YOUR FILE PATH AND
* THE PATH LISTED BELOW WITH MODULE EXPORTS TO MATCH THE DEST IN YOUR
* JADE GRUNT TASK
*********/

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  // This path is relative to the path decided below in the module exports.
  // The compbination route should match dest in jade grunt task
  'templates/**/*.js'
];






// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsDependenciesToInject = jsDependenciesToInject.map(function(depPath) {
  return require('path').join('.tmp/public/', depPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  // This will allow us to inject js files that are compiled from jade assets
  // and placed in the .tmp templates folder
  // Ultimately it needs to match dest in your jade grunt task
  return require('path').join('.tmp/public/',tplPath);

  // Originally...
  // return require('path').join('assets/',tplPath);
});


