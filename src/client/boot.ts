/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

import 'angular-ui-router';

import './home';

angular
  .module('sunrise', ['ui.router', 'home'])
  .config(['$urlRouterProvider', $urlRouterProvider => {
    $urlRouterProvider.otherwise('/');
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['sunrise']);
});
