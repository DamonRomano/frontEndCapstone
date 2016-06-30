app.config (($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dream.html',
    controller: 'DreamController',
    controllerAs: 'dream'
  })
  .when('/porch', {
    templateUrl: 'partials/porch.html',
    controller: 'WeatherController',
    controllerAs: 'porch'
  })
  .when('/crone', {
    templateUrl: 'partials/crone.html',
    controller: 'WeatherController',
    controllerAs: 'crone'
  })
  .otherwise('/')
})
