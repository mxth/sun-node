/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./whatis.html" />

import * as angular from 'angular';

import 'angular-ui-router';

declare var require;

angular
  .module('home.tkd.whatis', [
    'ui.router',
  ])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd.whatis', {
        url: '/what-is-taekwondo',
        views: {
          'content@': {
            template: require('text!./whatis.html')
          }
        },
        ncyBreadcrumb: {
          label: 'What is Taekwondo?'
        }
      });
  }]);