/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./taegeuk3.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.poomsae.taegeuk3', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae.taegeuk3', {
      url: '/taegeuk3',
      views: {
        'style': {
          template: require("text!./taegeuk3.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Taegeuk 3 Jang'
      }
    });
}
