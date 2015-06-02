/// <reference path="../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

import 'semantic-sidebar';

angular
  .module('ui.sidebar', [])
  .directive('srImageSrc', srImageSrc);

function srImageSrc() {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.attr('src', `/static/images/${attrs.srImageSrc}`);
    }
  };
}
