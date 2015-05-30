/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';
import * as fs from 'fs';

import 'angular-ui-router';

import './tkd/tkd';

angular
  .module('home', ['ui.router', 'home.tkd'])
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          nav: {
            template: fs.readFileSync(`${__dirname}/nav.html`)
          },
          content: {
            template: fs.readFileSync(`${__dirname}/home.html`)
          }
        }
      });
  }]);