/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="text!./poomsae.html" />
/// <amd-dependency path="text!./intro.html" />

import * as angular from 'angular';

import 'angular-ui-router';

import 'ui/video/video';
import 'ui/dropdown';
import 'ui/breadcrumb/breadcrumb';

import './taegeuk1/taegeuk1';
import './taegeuk2/taegeuk2';
import './taegeuk3/taegeuk3';
import './taegeuk4/taegeuk4';
import './taegeuk5/taegeuk5';

declare var require;

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('home.tkd.poomsae', {
      url: '/poomsae',
      views: {
        'content@': {
          template: require('text!./poomsae.html'),
          controller: PoomsaeCtrl,
          controllerAs: 'ctrl'
        },
        'style@home.tkd.poomsae': {
          template: require('text!./intro.html')
        }
      },
      ncyBreadcrumb: {
        label: 'Poomsae'
      }
    });
}

class PoomsaeCtrl {
  poomsaeSelectText;

  static $inject = ['$scope', '$breadcrumb'];
  
  constructor($scope, $breadcrumb) {
    $scope.$watch(() => $breadcrumb.getLastStep().ncyBreadcrumb.label, (label) => {
      this.poomsaeSelectText = label;
    });
  }
}

angular
  .module('home.tkd.poomsae', [
    'ui.router',

    'ui.video',
    'ui.dropdown',
    'ui.breadcrumb',

    'home.tkd.poomsae.taegeuk1',
    'home.tkd.poomsae.taegeuk2',
    'home.tkd.poomsae.taegeuk3',
    'home.tkd.poomsae.taegeuk4',
    'home.tkd.poomsae.taegeuk5'
  ])
  .config(config);
