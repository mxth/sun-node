var _ = require('underscore');

module.exports = function(grunt) {

  var typeScriptSource, browserifySource, htmlSource;

  typeScriptSource = ['src/**/*.ts'];
  browserifySource = ['target/client/**/*.js'];

  // use for browserify watch task, since it cannot be added in browserify task
  htmlSource = ['target/client/**/*.html'];
  
  var tsTask = {
    src: typeScriptSource,
    baseDir: 'src/',
    outDir: 'target/',
    options:  { module: 'commonjs' }
  };

  var tsWatchTask = _.clone(tsTask);
  tsWatchTask.watch = 'src/';

  grunt.initConfig({
    ts: {
      compile: tsTask,
      watch: tsWatchTask
    },
    tsd: {
      install: {
        options: {
          command: 'reinstall',
          config: './tsd.json'
        }
      }
    },
    browserify: {
      bundle: {
        src: browserifySource,
        dest: 'target/public/bundle.js',
        options: {
          transform: ['brfs']
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      default: {
        tasks: ['ts:watch', 'watch:src', 'watch:browserify']
      }
    },
    copy: {
      src: {
        files: [
         { expand: true, cwd: 'src/', src: '**/*', dest: 'target/', filter: 'isFile' },
         { expand: true, src: 'node_modules/semantic-ui-css/*.css', dest: 'target/public/', filter: 'isFile' }
        ]
      }
    },
    watch: {
      src: {
        files: 'src/**/*',
        tasks: ['copy:src']
      },
      browserify: {
        files: browserifySource.concat(htmlSource),
        tasks: ['browserify:bundle']
      }
    },
    clean: ['target/']
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['tsd:install', 'clean', 'copy:src', 'ts:compile', 'browserify:bundle', 'concurrent:default']);
  grunt.registerTask('travis', ['tsd:install', 'ts:compile']);
};
