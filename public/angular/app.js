var app = angular.module('oldcountry', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    // state
    .state('home', {
      url: "/",
      templateUrl: "pages/home.html"
      // ,
      // controller: 'homeCtrl'

    })
    // state;
    // state
    .state('products', {
      url: "/products",
      templateUrl: "pages/products.html"
      // ,
      // controller: 'productsCtrl'
    })
    // state;
    // state
    .state('products.portable', {
      url: "/portable",
      templateUrl: "pages/portable.html"
      // ,
      // controller: 'productsCtrl'
    })
    // state;
    // state
    .state('products.backyard', {
      url: "/backyard",
      templateUrl: "pages/backyard.html"
      // ,
      // controller: 'productsCtrl'
    })
    // state;

    $locationProvider.html5Mode(true);

})