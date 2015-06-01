/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./taegeuk1.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.poomsae.taegeuk1', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae.taegeuk1', {
      url: '/taegeuk1',
      views: {
        'style': {
          template: require("text!./taegeuk1.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Taegeuk 1 Jang'
      }
    });
}