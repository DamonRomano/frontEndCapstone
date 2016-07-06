app.controller('CroneController', function($scope, $http, $location, $timeout, WeatherFactory) {
  const crone = this

  crone.navigation = function(locationString) {
    $location.path(locationString)
    };
  crone.useTalisman = function() {
    WeatherFactory
    alert('I used the talisman!');
  };
});
