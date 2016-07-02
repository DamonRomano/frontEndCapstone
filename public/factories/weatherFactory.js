app.factory('WeatherFactory', function($http) {
  let conditionsUrl;
  let forecast3Url;
  let forecast10Url;
  let weather = {};

  return {
    init: () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("location", position);
        var key = "6267343012ed6255";
            // conditionsUrl = "http://api.wunderground.com/api/"
            //       + key
            //       + "/conditions/q/"
            //       + position.coords.latitude
            //       + ","
            //       + position.coords.longitude
            //       + ".json";
            // forecast3Url = "http://api.wunderground.com/api/"
            //       + key
            //       + "/forecast/q/"
            //       + position.coords.latitude
            //       + ","
            //       + position.coords.longitude
            //       + ".json";
            // forecast10Url = "http://api.wunderground.com/api/"
            //       + key
            //       + "/forecast10day/q/"
            //       + position.coords.latitude
            //       + ","
            //       + position.coords.longitude
            //       + ".json";

        touchApi(conditionsUrl)
      });//end geolocation & API URLs
    },//end init

    getWeather: () => {
      return weather
    },

  };//end return

  function touchApi(url) {
      $http
      .get(url)
      .then(function(response) {
        console.log("response", response);
        var data = response.data;
          weather.temp = parseInt(data.current_observation.temp_f);
          weather.humidity = parseInt(data.current_observation.relative_humidity);
          weather.wind = parseInt(data.current_observation.wind_mph);
          console.log("weather", weather);

      });//end .then
  };//end touchApi
}); //end factory
