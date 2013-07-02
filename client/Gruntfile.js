module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            report: 'gzip',
            exportAll: false
        },
        my_target: {
            files: {
                '_public/lib.min.js': ['script/lib/**/*.js']
            }
        }
    },
    coffee: {
        glob_to_multiple: {
            expand: true,
            flatten: true,
            options: {
                join: true,
                sourceMap: true
            },
            files: {
                '_public/game.js': ['script/**/*.coffee']
            }
        }
    },
    sass: {
        options: {                       // Target options
            style: 'compressed'
        },
        dist: {
            files: {
                '_public/style.css': 'style/main.sass'
            }
        }
    },

    watch: {
      scripts: {
          files: ['script/**/*.coffee'],
          tasks: ['coffee'],
          options: {
              nospawn: true
          }
      },
      sass: {
          files: ['style/*.sass'],
          tasks: ['sass']
      }

    },
    jshint: {
         all: ['_public/game.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // Deploy
  //TODO:
  //grunt.registerTask('deploy', ['sass','coffee', 'jst', 'uglify',"copy"]);

};