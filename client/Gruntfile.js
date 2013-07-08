module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['./src/app/**/*.js'],
            html: ['./src/index.html'],
            tpl: ['./src/app/templates/*.tpl.html'],
            css: ['./src/assets/css/*.css']
        },
        jshint: {
            files: ['Gruntfile.js', '<%= src.angular.js %>'],
            options: {
                // options here to override JSHint defaults
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        },
        watch: {
            options: {
                // Start a live reload server on the default port 35729
                livereload: true
            },
            files:['<%= src.js %>', '<%= src.html %>', '<%= src.tpl %>', '<%= src.css %>'],
            tasks:['default','timestamp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });

    // Default task
    grunt.registerTask('default', ['jshint']);
};