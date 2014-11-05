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
    })
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    });

  $locationProvider.html5Mode(true);

}]);
