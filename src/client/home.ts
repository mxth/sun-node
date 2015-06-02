/// <reference path="../../typings/angularjs/angular.d.ts" />

/// <amd-dependency path="text!./nav/nav.html" />
/// <amd-dependency path="text!./home.html" />

import 'angular-animate';
import 'angular-ui-router';
import 'ui/breadcrumb/breadcrumb';
import 'ui/image';

import './nav/sidebar';

import './tkd/tkd';

declare var require;

import * as angular from 'angular';

angular
  .module('home', [
    'ngAnimate',
    'ui.router',
    'ui.breadcrumb',
    'ui.image',
    'nav.sidebar',
    'home.tkd'
  ])
  .config(config)
  .run(run);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        nav: {
          template: require("text!./nav/nav.html")
        },
        content: {
          template: require("text!./home.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Home'
      }
    });
}

run.$inject = ['$rootScope', '$state'];

function run($rootScope, $state) {
  $rootScope.$state = $state;
}

angular.element(document).ready(() => {
  angular.bootstrap(document, ['home']);
});