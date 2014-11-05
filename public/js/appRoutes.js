angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider

  // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    });

  $locationProvider.html5Mode(true);

}]);
