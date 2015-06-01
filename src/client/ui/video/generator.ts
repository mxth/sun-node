/// <reference path="../../../../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

class SmVideoGenerator {
  static generatorNames = ['smVideoYoutube'];

  addGenerator(serviceName) {
    if (SmVideoGenerator.generatorNames.indexOf(serviceName) === -1) {
      SmVideoGenerator.generatorNames.push(serviceName);
    }
  }

  $get = ['$injector', function ($injector) {
    var
      seen = [],
      generators = SmVideoGenerator.generatorNames.map(function(name) {
        var def = $injector.get(name);
        if (seen.indexOf(def.source) !== -1) {
          throw new Error('Duplicate generator source value: ' + def.source);
        } else {
          seen.push(def.source);
        }
        return new Generator(def);
      });

    function get(source) {
      return generators.filter(function(gen) {
        return gen.source === source;
      })[0];
    }

    function getUrlInfo(url) {
      var res = [];

      generators.forEach(function(gen) {
        var id = angular.isFunction(gen.getIdFromUrl) && gen.getIdFromUrl(url);
        if (id) {
          res.push({
            generator: gen,
            id: id
          });
        }
      });
      if (res.length > 1) {
        console.warn('Url matches multiple video sources: ' +
          res.map(function(info) { return info.generator.source; }) +
          '. Used source: ' + res[0].generator.source);
      }
      return res[0];
    }

    return {
      get: get,
      getUrlInfo: getUrlInfo
    };
  }];
}

class Generator {
  defaultParams;
  embedUrl;
  source;
  getIdFromUrl;

  constructor(definition) {
    if (!definition.source) {
      throw new Error('Source is missing from generator definition');
    }
    if (!definition.embedUrl) {
      throw new Error('Embed url is missing from generator definition');
    }
    angular.extend(this, definition);
  }

  generateUrl(params) {
    var finalParams = {}, url = '';

    if (this.defaultParams) {
      angular.extend(finalParams, this.defaultParams);
    }
    angular.extend(finalParams, params);
    angular.forEach(finalParams, function(value, key) {
       url += '&amp;' + key + '=' + value;
    });

    return url;
  }
  
  generate(id, params) {
    var html = '' +
      '<iframe src="'+ this.embedUrl + id + '?=' + this.generateUrl(params) + '"' +
      ' width="100%" height="100%"' +
      ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    return angular.element(html);
  }
}

class SmVideoYoutube {
  static defaultParams ={
    modestbranding: 1,
    cc_load_policy: 1,
    autohide: 0
  };

  extendDefaultParams(params) {
    angular.extend(SmVideoYoutube.defaultParams, params);
  };
  
  $get = ['$window', '$q', function($window, $q) {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    function getId(url) {
      var matches = url.match(regExp);
      return matches && matches[1];
    }

    let loadApiPromise = null;
    function loadApi() {
      loadApiPromise = loadApiPromise || $q(function(resolve) {
        if ($window.YT) {
          resolve();
        } else {
          var tag = $window.document.createElement('script');

          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = $window.document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          $window.onYouTubeIframeAPIReady = function() {
            resolve();
          };
        }
      });
      return loadApiPromise;
    }

    function getPlayer(element) {
      return $q(function(resolve) {
        loadApi().then(function() {
          new $window.YT.Player(element, {
            events: {
              onReady: function(event) {
                resolve(event.target);
              }
            }
          });
        });
      });
    }

    return {
      defaultParams: SmVideoYoutube.defaultParams,
      source: 'youtube',
      embedUrl: '//www.youtube.com/embed/',
      getIdFromUrl: getId,
      getPlayer: getPlayer
    };
  }];
}

angular
  .module('ui.video.generator', [])
  .provider('smVideoGenerator', SmVideoGenerator)
  .provider('smVideoYoutube', SmVideoYoutube);