/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./poomsae.html" />
/// <amd-dependency path="text!./intro.html" />

import * as angular from 'angular';

import 'angular-ui-router';
import 'ui/video/video';
import './taegeuk1/taegeuk1';

declare var require;

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae', {
      url: '/poomsae',
      views: {
        'content@': {
          template: require('text!./poomsae.html')
        },
        'style@home.tkd.poomsae': {
          template: require('text!./intro.html')
        }
      },
      ncyBreadcrumb: {
        label: 'Poomsae'
      }
    });
}

angular
  .module('home.tkd.poomsae', [
    'ui.router',
    'ui.video',
    'home.tkd.poomsae.taegeuk1'
  ])
  .config(config);