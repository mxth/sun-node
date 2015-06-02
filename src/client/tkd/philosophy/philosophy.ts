/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./philosophy.html" />

import * as angular from 'angular';

import 'angular-ui-router';

declare var require;

angular
  .module('home.tkd.philosophy', [
    'ui.router',
  ])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd.philosophy', {
        url: '/philosophy',
        views: {
          'content@': {
            template: require('text!./philosophy.html')
          }
        },
        ncyBreadcrumb: {
          label: 'Philosophy'
        }
      });
  }]);