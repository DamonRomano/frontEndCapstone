app.factory('WeatherFactory', function($http) {
  let storedUrl;
  let weather = {};

  return {
    init: () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        var key = "6267343012ed6255";
        storedUrl = "http://api.wunderground.com/api/"
              + key
              + "/conditions/q/"
              + position.coords.latitude
              + ","
              + position.coords.longitude
              + ".json";
        touchApi(storedUrl)
      })
    },
    getWeather: () => {
      return weather
    }
  }

  function touchApi(url) {
      $http
      .get(url)
      .then(function(response) {
        console.log("response", response);
        var data = response.data;
        // var weather = {}
          weather.temp = parseInt(data.current_observation.temp_f);
          weather.humidity = parseInt(data.current_observation.relative_humidity);
          weather.wind = parseInt(data.current_observation.wind_mph);
          console.log("weather", weather);
        // return weather

        // $scope.tempFlavor = getTempFlavor(temp);
        // $scope.humidityFlavor = getHumidityFlavor(humidity);
        // $scope.windFlavor = getWindFlavor(wind);
      });
  }
}); //end factory
