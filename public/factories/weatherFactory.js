app.factory('WeatherFactory', function($q, $http, $timeout) {

  let conditionsPromise;
  let conditionsDataPromise;
  let forecastPromise;
  let forecastDataPromise;
  let currentPositionPromise;

  var getWeatherPromise = function(position, endpoint, promise) {
    if (!promise) {
        var deferred = $q.defer();
        deferred.resolve(getData(position, endpoint));
        promise = deferred.promise;
    }
    return promise;
  };
  var getCurrentPosition = function() {
    if (!currentPositionPromise) {
      var deferred = $q.defer();
      if (!navigator.geolocation) {
        deferred.reject('Geolocation not supported.');
      } else {
          navigator.geolocation.getCurrentPosition(
            function(position) {
                deferred.resolve(position);
            },
            function(err) {
                deferred.reject(err);
            });
      }
      currentPositionPromise = deferred.promise;
    }
    return currentPositionPromise;
  };
  function getData(position, endpoint) {
      var key = "6267343012ed6255";
      var url = "http://api.wunderground.com/api/"
                + key
                + "/"
                + endpoint
                + "/q/"
                + position.coords.latitude
                + ","
                + position.coords.longitude
                + ".json";
      return $http.get(url);
  };
  return {
    getConditions: () => {
      if (!conditionsPromise) {
        var deferred = $q.defer();
        getCurrentPosition()
          .then(function(val) {
            return getWeatherPromise(val, 'conditions', conditionsDataPromise);
          })
          .then(function(val) {
            deferred.resolve(val);
          })
        conditionsPromise = deferred.promise;
      }
      return conditionsPromise;
    },
    getForecast: () => {
      if (!forecastPromise) {
        var deferred = $q.defer();
        getCurrentPosition()
          .then(function(val) {
            return getWeatherPromise(val, 'forecast', forecastDataPromise);
          })
          .then(function(val) {
            deferred.resolve(val);
          })
        forecastPromise = deferred.promise;
      }
      return forecastPromise;
    },
  };


    // getOtherCityConditions: () => {
    //   if (!otherCityConditionsPromise) {
    //     var deferred = $q.defer();
    //     getCityAndStateFromUserInput()
    //       .then (function(val) {
    //         return get
    //       })
    //   }
    // }
}); //end factory
