app.config (($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dream.html',
    controller: 'DreamController',
    controllerAs: 'dream'
  })
  .when('/porch', {
    templateUrl: 'partials/porch.html',
    controller: 'PorchController',
    controllerAs: 'porch'
  })
  .when('/crone', {
    templateUrl: 'partials/crone.html',
    controller: 'CroneController',
    controllerAs: 'crone'
  })
  .when('/potion', {
    templateUrl: 'partials/potion.html',
    controller: 'PotionController'
  })
  .otherwise('/')
})
