var app = angular.module('oldcountry', ['ui.router', 'ngFitText']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    // state
    .state('home', {
      url: "/",
      templateUrl: "pages/home.html"
    })
    // state;
    // state
    .state('products', {
      url: "/products",
      templateUrl: "pages/products.html"
    })
    // state;
    // state
    .state('products.portable', {
      url: "/portable",
      templateUrl: "pages/portable.html"
    })
    // state;
    // state
    .state('products.backyard', {
      url: "/backyard",
      templateUrl: "pages/backyard.html"
    })
    // state;
    // state
    .state('insulated', {
      url: "/insulated",
      templateUrl: "pages/insulated.html"
    })
    // state;

    $locationProvider.html5Mode(true);

})