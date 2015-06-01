var _ = require('underscore');

module.exports = function(grunt) {

  var nodeSrc, clientSrc;

  nodeSrc = ['src/**/*.ts', '!src/client/**/*.ts'];
  clientSrc = ['src/client/**/*.ts'];

  var nodeTask = {
    src: nodeSrc,
    baseDir: 'src/',
    outDir: 'target/',
    options:  { module: 'commonjs' }
  };

  var tsNodeWatchTask = _.clone(nodeTask);
  tsNodeWatchTask.watch = ['src/**/*.ts', '!src/client/'];

  var clientTask = {
    src: clientSrc,
    baseDir: 'src/client/',
    outDir: 'target/public/',
    options:  { module: 'amd' }
  };

  var clientWatchTask = _.clone(clientTask);
  clientWatchTask.watch = clientSrc;

  grunt.initConfig({
    ts: {
      node: nodeTask,
      nodeWatch: tsNodeWatchTask,
      client: clientTask,
      clientWatch: clientWatchTask
    },
    tsd: {
      install: {
        options: {
          command: 'reinstall',
          config: './tsd.json'
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      default: {
        tasks: ['ts:nodeWatch', 'ts:clientWatch', 'watch:assets', 'watch:less', 'watch:html', 'shell:npm']
      }
    },
    copy: {
      src: {
        files: [
         { expand: true, cwd: 'src/', src: '**/*', dest: 'target/', filter: 'isFile' }
        ]
      },
      html: {
        files: [
         { expand: true, cwd: 'src/client', src: '**/*.html', dest: 'target/public', filter: 'isFile' }
        ]
      }
    },
    watch: {
      assets: {
        files: ['src/**/*', '!src/**/*.less', '!src/**/*.ts', '!src/**/*.html'],
        tasks: ['copy:src']
      },
      less: {
        files: 'src/**/*.less',
        tasks: ['less:dev']
      },
      html: {
        files: 'src/client/**/*.html',
        tasks: ['copy:html']
      }
    },
    clean: ['target/'],
    shell: {
      npm: {
        command: 'npm start'
      },
      semanticBuild: {
        command: ['cd semantic', 'gulp build'].join('&&')
      },
      semanticWatch: {
        command: ['cd semantic', 'gulp watch'].join('&&')
      }
    },
    less: {
      dev: {
        files: {
          'target/public/main.css': 'src/client/style.less'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['tsd:install', 'clean', 'shell:semanticBuild', 'copy', 'ts:node', 'ts:client', 'less:dev', 'concurrent:default']);
  grunt.registerTask('travis', ['tsd:install', 'ts:compile']);
};
