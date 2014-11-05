module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      main: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/style.css': 'public/css/sass/style.scss'
        }
      }
    },
    csslint: {
      main: {
        options: {
          csslintrc: '.csslintrc',
          'overqualified-elements': false
        },
        src: ['public/css/*.css']
      }
    },
    jsbeautifier: {
      files: {
        src: ['app/*.js', 'app/**/*.js', 'public/js/*.js', 'public/js/**/*.js'],
        options: {
          config: '.jsbeautifyrc'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: ['app/*.js', 'app/**/*.js', 'public/js/*.js', 'public/js/**/*.js']
      }
    },
    watch: {
      src: {
        files: [
          'app/*.js',
          'app/**/*.js',
          'public/js/*.js', 
          'public/js/**/*.js',
          'public/css/sass/*.scss'
        ],
        tasks: ['default'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass:main', 'csslint:main', 'jsbeautifier', 'jshint', 'watch']);

};