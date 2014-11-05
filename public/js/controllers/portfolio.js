angular.module('portfolio', []).controller('PortfolioController', function ($scope, $http) {

  console.log('PortfolioController initialized');

  $(window)
    .ready(function () {
      if ($(window).width() < 600) {
        $('.notHome').addClass('mobile');
        $('.mobile').removeClass('notHome');
      }
    })
    .resize(function () {
      if ($(window).width() < 600) {
        $('.notHome').addClass('mobile');
        $('.mobile').removeClass('notHome');
      } else {
        $('.mobile').addClass('notHome');
        $('.notHome').removeClass('mobile');
      }
    });

  $('.circle:not(".active")').hover(function () {
    $(this).toggleClass('active');
  });

});
