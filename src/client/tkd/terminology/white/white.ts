/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./white.html" />

import * as angular from 'angular';

import 'angular-ui-router';
declare var require;

angular
  .module('home.tkd.terminology.white', ['ui.router'])
  .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.terminology.white', {
      url: '/white',
      views: {
        'term': {
          template: require("text!./white.html")
        }
      },
      ncyBreadcrumb: {
        label: 'White Belt'
      }
    });
}