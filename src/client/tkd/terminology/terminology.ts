/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./terminology.html" />
/// <amd-dependency path="text!./intro.html" />

import * as angular from 'angular';

import 'angular-ui-router';
import './white/white';

declare var require;

angular
  .module('home.tkd.terminology', [
    'ui.router',
    'home.tkd.terminology.white'
  ])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.terminology', {
      url: '/terminology',
      views: {
        'content@': {
          template: require('text!./terminology.html')
        },
        'term@home.tkd.terminology': {
          template: require('text!./intro.html')
        }
      },
      ncyBreadcrumb: {
        label: 'Terminology'
      }
    });
}