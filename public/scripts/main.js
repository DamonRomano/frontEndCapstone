var app = angular.module('weatherStoryApp', []);

app.controller('metricsController', init);

app.controller('bodyController', initBody);

function initBody($scope, $http) {
  var dt = new Date();
  $scope.bodyStyle = getTheme(dt.getHours());
}

function init($scope, $http) {
  $scope.myWelcome = 'Hello Damon!';
    $http
  .get("http://api.wunderground.com/api/6267343012ed6255/conditions/q/35.8172,-86.9395.json")
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