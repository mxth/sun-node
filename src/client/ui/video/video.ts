/// <reference path="../../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

import './generator';

angular
  .module('ui.video', ['ui.video.generator'])
  .directive('smVideo', smVideo);

smVideo.$inject = ['smVideoGenerator'];

function smVideo(smVideoGenerator) {
  return {
    restrict: 'EA',
    replace: true,
    template: setTemplate,
    scope: {
      onReady: '&'
    },
    link: function(scope, element, attrs) {
      var
        source = attrs.source,
        id = attrs.id,
        url = attrs.url,
        params = angular.isDefined(attrs.options) ? scope.$parent.$eval(attrs.options) : {},
        iframe, generator;

      angular.forEach(attrs, function(value, key) {
        if (key.indexOf('pr') === 0) {
          params[key.replace('pr', '').toLowerCase()] = value;
        }
      });

      if (attrs.placeholder) {
        params.autoplay = 1;
      }

      if ((source && id) || url) {
        if (!(source && id)) {
          var info = smVideoGenerator.getUrlInfo(url);

          if (!info) { throw new Error('Url does not match with any video source'); }

          id = info.id;
          generator = info.generator
        } else {
          generator = smVideoGenerator.get(source);
        }

        iframe = generator.generate(id, params);
      } else {
        throw new Error('No source or url for video.');
      }

      if (angular.isDefined(attrs.placeholder)) {
        element.on('click', init);
        element.on('keydown', function(event) {
          if (event.which === 32) {
            event.preventDefault();
            event.stopPropagation();
            init();
          }
        });
      } else {
        init();
      }

      let initDone = false;
      function init() {
        if (initDone) return;

        element.addClass('active');
        element.find('div').append(iframe);

        if (angular.isDefined(attrs.onReady)) {
          generator.getPlayer && generator.getPlayer(iframe[0]).then(function(player) {
            scope.onReady({player: player});
          });
        }

        initDone = true;
      }
    }
  };
}

function setTemplate(element, attrs) {
  var html = '<div class="ui video" tabindex="0">';
  if (attrs.placeholder) {
    html += '' +
      '<i class="video play icon"></i>' +
      '<img class="placeholder" src="' + attrs.placeholder + '">';
  }
  html += '<div class="embed"></div></div>';
  return html;
}