({
  baseUrl: '.',
  name: 'boot',
  out: '../public/boot.js',
  include: ['requireLib', 'amdConfigRjs'],
  shim: {
    'angular': { exports: 'angular', deps: ['jquery'] },
    'underscore': { exports: '_' },

    'angular-animate': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] },
    'angular-breadcrumb': { deps: ['angular'] },

    'semantic-sidebar': { deps: ['jquery'] }
  },
  paths: {
    'angular': '../../node_modules/angular/angular',
    'angular-animate': '../../node_modules/angular-animate/angular-animate',
    'angular-ui-router': '../../node_modules/angular-ui-router/build/angular-ui-router',
    'angular-breadcrumb': '../../node_modules/angular-breadcrumb/dist/angular-breadcrumb',

    'underscore': '../../node_modules/underscore/underscore',
    'text': '../../node_modules/requirejs-text/text',
    'jquery': '../../node_modules/jquery/dist/jquery',

    'semantic-sidebar': './semantic/components/sidebar',

    'requireLib': '../../node_modules/requirejs/require'
  }
});
