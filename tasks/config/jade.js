/**
 * `jade`
 *
 * ---------------------------------------------------------------
 *
 * Compile Jade files located in `assets/templates` into js templates
 * and generate new `.js` files in `.tmp/public/templates`.
 *
 */
module.exports = function(grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true,
        client: true,
        namespace: "Jade.Templates"     // Think like accessing a JSON object
      },
      files: [{
        expand: true,
        cwd: 'assets/templates/',    // Where the jade files are found
        src: ['**/*.jade'],
        dest: '.tmp/public/templates/',  // Where you want compile files to go
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};