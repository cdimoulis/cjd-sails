/**
 * `scss`
 *
 * ---------------------------------------------------------------
 *
 * Compile Scss files located in `assets/styles` into css
 *
 */
module.exports = function(grunt) {

  grunt.config.set('scss', {
    dev: {
      options: {
        trace: true,
      },
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['**/*.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
