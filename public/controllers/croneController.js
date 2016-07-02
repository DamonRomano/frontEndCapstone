var test;

app.controller('CroneController', function($scope, $http, $location, $timeout, WeatherFactory) {
  const crone = this

  crone.navigation = function(locationString) {
    $location.path(locationString)
    };//end nav function

  crone.drinkPotion = function() {
    WeatherFactory.getForecast().then(function(val) {
      var days = val.data.forecast.txt_forecast.forecastday;
      var forecastBlocks = getThreeDayForecastList(days);
      crone.threeDayForecast = forecastBlocks;
    });
  };

  crone.useTalisman = function() {
    alert('I used the talisman!');
  };

  function getThreeDayForecastList(days) {
    var array = [];
    for (var i = 0; i < days.length; i++) {
      var item = days[i];
      array.push('<div>');
      array.push(item.title);
      array.push(" : ");
      array.push(item.fcttext);
      array.push('</div>');
    }
    return array.join('');
  }

});//end controller