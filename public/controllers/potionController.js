app.controller('PotionController', function($scope, $http, $location, $timeout, WeatherFactory) {
  const potion = this

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
  WeatherFactory.getForecast().then(function(val) {
    var days = val.data.forecast.txt_forecast.forecastday;
    var forecastBlocks = getThreeDayForecastList(days);
    $scope.forecast = forecastBlocks;
    // $scope.$apply();
  });

  $scope.navigation = function(locationString) {
    $location.path(locationString)
  };
});