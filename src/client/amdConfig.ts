declare var requirejs;

requirejs.config({
  baseUrl: 'static',
  shim: {
    'angular': { exports: 'angular', deps: ['jquery'] },
    'underscore': { exports: '_' },

    'angular-animate': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] },
    'angular-breadcrumb': { deps: ['angular'] },
    'angular-scroll': { deps: ['angular'] },

    'semantic-sidebar': { deps: ['jquery'] }
  },
  paths: {
    'angular': './node_modules/angular/angular',
    'angular-animate': './node_modules/angular-animate/angular-animate',
    'angular-ui-router': './node_modules/angular-ui-router/build/angular-ui-router',
    'angular-breadcrumb': './node_modules/angular-breadcrumb/dist/angular-breadcrumb',
    'angular-scroll': './node_modules/angular-scroll/angular-scroll',

    'underscore': './node_modules/underscore/underscore',
    'text': './node_modules/requirejs-text/text',
    'jquery': './node_modules/jquery/dist/jquery',

    'semantic-sidebar': './semantic/components/sidebar'
  }
});
