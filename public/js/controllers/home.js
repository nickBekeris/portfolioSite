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

  setTimeout(function () {
    $('h1').addClass('active');
  }, 300);

  if ($('.fader li').hasClass('inactive')) {
    setTimeout(function () {
      setInterval(function () {
        $('.fader .inactive:first').addClass('active');
        $('.fader .inactive:first').removeClass('inactive');
      }, 600);
    }, 900);
  }

  $('.circle:not(".active")').hover(function () {
    $(this).toggleClass('active');
  });

});
