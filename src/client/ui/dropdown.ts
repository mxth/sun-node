/// <reference path="../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

import 'semantic-dropdown';

angular
  .module('ui.dropdown', [])
  .directive('smDropdown', smDropdown);

smDropdown.$inject = ['$parse'];

function smDropdown($parse) {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.dropdown();

      if (attrs.smDropdown) {
        $parse(attrs.smDropdown).assign(scope, element);
      }
    }
  };
}
