/// <reference path="../../../typings/node/node.d.ts"/>
/// <reference path="../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';
import * as fs from 'fs';

import 'angular-ui-router';

angular
  .module('home.tkd', ['ui.router'])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home.tkd', {
        url: '/tkd',
        views: {
          content: {
            template: fs.readFileSync(`${__dirname}/tkd.html`)
          }
        }
      });
  }]);