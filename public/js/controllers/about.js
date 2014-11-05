angular.module('about', []).controller('AboutController', function ($scope, $http) {

  console.log('AboutController initialized');

  $('.circle:not(".active")').hover(function () {
    $('.circle').toggleClass('active');
  });

});
