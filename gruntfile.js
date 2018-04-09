module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          // options: {                       // Target options
          //   style: 'expanded'
          // },
          files: {                         // Dictionary of files
            'style.css': 'style.scss'       // 'destination': 'source'
          }
        }
      }
    });
    grunt.registerTask('default', ['sass']);
};