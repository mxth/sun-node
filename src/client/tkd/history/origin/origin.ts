/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./origin.html" />

import * as angular from 'angular';

import 'angular-ui-router';

declare var require;

angular
  .module('home.tkd.history.origin', [
    'ui.router',
  ])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd.history.origin', {
        url: '/origin',
        views: {
          'history': {
            template: require('text!./origin.html')
          }
        },
        ncyBreadcrumb: {
          skip: true
        }
      });
  }]);