angular.module('home', []).controller('HomeController', function ($scope, $http) {

  console.log('HomeController initialized');

  $scope.name = 'Nicholas';

  $(window)
    .ready(function () {
      if ($(window).width() < 600) {
        $('.vert').addClass('mobile');
        $('.mobile').removeClass('vert');
      }
    })
    .resize(function () {
      if ($(window).width() < 600) {
        $('.vert').addClass('mobile');
        $('.mobile').removeClass('vert');
      } else {
        $('.mobile').addClass('vert');
        $('.vert').removeClass('mobile');
      }
    });

});
