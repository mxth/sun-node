/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./taegeuk2.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.poomsae.taegeuk2', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae.taegeuk2', {
      url: '/taegeuk2',
      views: {
        'style': {
          template: require("text!./taegeuk2.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Taegeuk 2 Jang'
      }
    });
}
