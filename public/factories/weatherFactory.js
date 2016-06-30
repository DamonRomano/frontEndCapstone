app.factory('weatherFactory', function() {

  function init($scope, $http) {
    if (!navigator.geolocation)
      return;
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.$apply(function() {
        var key = "6267343012ed6255";
        var url = "http://api.wunderground.com/api/"
                  + key
                  + "/conditions/q/"
                  + position.coords.latitude
                  + ","
                  + position.coords.longitude
                  + ".json";

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
      });
    });
  };
});