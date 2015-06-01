/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./breadcrumb.html" />

import * as angular from 'angular';

import 'angular-breadcrumb';

declare var require;

config.$inject = ['$breadcrumbProvider']

function config($breadcrumbProvider) {
  $breadcrumbProvider.setOptions({
    template: require('text!./breadcrumb.html')
  });
}

angular
  .module('ui.breadcrumb', ['ncy-angular-breadcrumb'])
  .config(config);