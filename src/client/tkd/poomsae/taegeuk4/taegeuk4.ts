/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./taegeuk4.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.poomsae.taegeuk4', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae.taegeuk4', {
      url: '/taegeuk4',
      views: {
        'style': {
          template: require("text!./taegeuk4.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Taegeuk 4 Jang'
      }
    });
}
