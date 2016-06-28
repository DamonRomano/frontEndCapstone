var app = angular.module('weatherStoryApp', []);

app.controller('metricsController', init);

app.controller('bodyController', initBody);

function initBody($scope, $http) {
  var dt = new Date();
  $scope.bodyStyle = getTheme(dt.getHours());
}

function init($scope, $http) {
  var key = "6267343012ed6255";
  var crd = getLocation();
  var url = "http://api.wunderground.com/api/"
            + key
            + "/conditions/q/"
            + crd.latitude
            + ","
            + crd.longitude
            + ".json";

  $scope.myWelcome = 'Welcome. Fate sees you, Traveller.';
    $http
    .get(url)
    .then(function(response) {
      var data = response.data;
      var temp = parseInt(data.current_observation.temp_f);
      var humidity = parseInt(data.current_observation.relative_humidity);
      var wind = parseInt(data.current_observation.wind_mph);

      $scope.tempFlavor = getTempFlavor(temp);
      $scope.humidityFlavor = getHumidityFlavor(humidity);
      $scope.windFlavor = getWindFlavor(wind);
    });
  }