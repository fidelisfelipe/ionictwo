angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FeaturesCtrl', function($scope, Features) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.features = Features.all();
  $scope.remove = function(feature) {
    Features.remove(feature);
  };
})

.controller('FeatureDetailCtrl', function($scope, $stateParams, Features) {
  $scope.feature = Features.get($stateParams.featureId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
