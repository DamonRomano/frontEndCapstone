app.controller('CroneController', function($scope, $http, $location, $timeout, WeatherFactory) {
  const crone = this

  WeatherFactory.init();
  $timeout();

  crone.weather = WeatherFactory.getWeather();
  $timeout().then(function() {

  });




  crone.navigation = function(locationString) {
    $location.path(locationString)
    };//end nav function

});//end controller