/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./history.html" />

import * as angular from 'angular';

import 'angular-ui-router';

import './origin/origin';

declare var require;

angular
  .module('home.tkd.history', [
    'ui.router',
    'home.tkd.history.origin'
  ])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd.history', {
        url: '/history',
        views: {
          'content@': {
            template: require('text!./history.html')
          }
        },
        ncyBreadcrumb: {
          label: 'History'
        }
      });
  }])
  .run(['$rootScope', '$state', ($rootScope, $state) => {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      console.log(toState.name);
      if (toState.name == 'home.tkd.history') {
        event.preventDefault(); 
        $state.go('home.tkd.history.origin');
      }
    });
  }]);