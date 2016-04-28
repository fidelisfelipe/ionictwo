angular.module('starter.services', [])

.factory('Features', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var features = [{
    id: 1,
    name: 'Teste 1',
    description: 'Fist Feature',
    img: 'img/ionic.png'
  },
  {
    id: 2,
    name: 'Teste 2',
    description: 'Secund Feature',
    img: 'img/ionic.png'
  },
  {
    id: 3,
    name: 'Teste 3',
    description: 'Last Feature',
    img: 'img/ionic.png'
  }];

  return {
    all: function() {
      return features;
    },
    remove: function(feature) {
      features.splice(features.indexOf(feature), 1);
    },
    get: function(featureId) {
	  
      for (var i = 0; i < features.length; i++) {
        if (features[i].id === parseInt(featureId)) {
          return features[i];
        }
      }
      return null;
    }
  };
});
