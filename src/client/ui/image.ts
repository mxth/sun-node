/// <reference path="../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

angular
  .module('ui.image', [])
  .directive('srImageSrc', srImageSrc);

function srImageSrc() {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.attr('src', `/static/images/${attrs.srImageSrc}`);
    }
  };
}
