var app = angular.module('oldcountry', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    // state
    .state('home', {
      url: "/",
      templateUrl: "pages/home/home.html"
    })
    // state;
    // state
    .state('products', {
      url: "/products",
      templateUrl: "pages/products/products.html"
    })
    // state;
    // state
    .state('products.insulated', {
      url: "/insulated",
      templateUrl: "pages/products/insulated/insulated.html"
    })
    // state;
    // state
    .state('products.portable-smokers', {
      url: "/portable-smokers",
      templateUrl: "pages/products/portable/portable-smokers.html"
    })
    // state;
    // state
    .state('products.portable-insulated', {
      url: "/portable-insulated",
      templateUrl: "pages/products/portable/portable-insulated.html"
    })
    // state;
    // state
    .state('products.portable-grills', {
      url: "/portable-grills",
      templateUrl: "pages/products/portable/portable-grills.html"
    })
    // state;
    // state
    .state('products.portable-rotisseries', {
      url: "/portable-rotisseries",
      templateUrl: "pages/products/portable/portable-rotisseries.html"
    })
    // state;
    // state
    .state('products.backyard-smokers', {
      url: "/backyard-smokers",
      templateUrl: "pages/products/backyard/backyard-smokers.html"
    })
    // state;
    // state
    .state('products.backyard-pits', {
      url: "/backyard-pits",
      templateUrl: "pages/products/backyard/backyard-pits.html"
    })
    // state;
    // state
    .state('products.backyard-grills', {
      url: "/backyard-grills",
      templateUrl: "pages/products/backyard/backyard-grills.html"
    })
    // state;
    // state
    .state('products.backyard-open-fire-pits', {
      url: "/backyard-open-fire-pits",
      templateUrl: "pages/products/backyard/backyard-open-fire-pits.html"
    })
    // state;

    $locationProvider.html5Mode(true);

})