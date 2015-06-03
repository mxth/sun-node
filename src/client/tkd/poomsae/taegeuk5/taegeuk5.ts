/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./taegeuk5.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.poomsae.taegeuk5', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae.taegeuk5', {
      url: '/taegeuk5',
      views: {
        'style': {
          template: require("text!./taegeuk5.html")
        }
      },
      ncyBreadcrumb: {
        label: 'Taegeuk 5 Jang'
      }
    });
}
