/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./sidebar.html" />

import 'semantic-sidebar';

declare var require;

import * as angular from 'angular';

class srSideBar {
  elementDefer: ng.IDeferred<any>;

  static $inject = ['$q'];
 
  constructor($q: ng.IQService) {
    this.elementDefer = $q.defer();
  }

  init(element) {
    this.elementDefer.resolve(element);
  }

  toggle() {
    this.elementDefer.promise.then((element) => {
      element.sidebar('toggle');
    });
  }
}

srNavSidebar.$inject = ['srSidebar'];

function srNavSidebar(srSideBar) {
  return {
    restrict: 'E',
    template: require('text!./sidebar.html'),
    replace: true,
    link: (scope, element, attrs) => {
      srSideBar.init(element);
    }
  };
}

srNavSidebarToggle.$inject = ['srSidebar'];

function srNavSidebarToggle(srSideBar) {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.click(() => {
        srSideBar.toggle();
      });
    }
  };
}

angular
  .module('nav.sidebar', [])
  .service('srSidebar', srSideBar)
  .directive('srNavSidebar', srNavSidebar)
  .directive('srNavSidebarToggle', srNavSidebarToggle);
