/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./tkd.html" />

import * as angular from 'angular';

import 'angular-ui-router';

import './whatis/whatis';
import './philosophy/philosophy';
import './history/history';
import './poomsae/poomsae';
import './terminology/terminology';

declare var require;

angular
  .module('home.tkd', [
    'ui.router',
    'home.tkd.whatis',
    'home.tkd.philosophy',
    'home.tkd.history',
    'home.tkd.poomsae',
    'home.tkd.terminology'
  ])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd', {
        url: 'tkd',
        views: {
          'content@': {
            template: require('text!./tkd.html')
          }
        },
        ncyBreadcrumb: {
          label: 'Taekwondo'
        }
      });
  }]);