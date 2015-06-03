/// <reference path="../../../typings/angularjs/angular.d.ts" />

import 'angular-scroll';

import * as angular from 'angular';
import * as $ from 'jquery';

angular
  .module('ui.backToTop', ['duScroll'])
  .directive('srBackToTop', srBackToTop);

srBackToTop.$inject = ['$document'];

function srBackToTop($document) {

  return {
    restrict: 'AE',
    template: '<button class="ui small black button">Back to top</a>',
    link: (scope, element, attrs) => {
      scope.$watch(hasScrollBar, (has) => {
        if (has)
          element.show();
        else
          element.hide();
      });
      element.click(() => {
        $document.scrollTopAnimated(0);
      });
    }
  };
}

function hasScrollBar() {
  return $(document).height() > $(window).height();
}