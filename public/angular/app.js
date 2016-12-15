var app = angular.module('oldcountry', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

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

    .state('otherwise', {
    url: '*path',
    resolve: {
      redirect: function($location) {
        $location.path("/").replace()
        console.log("redirecting...")
      }
    }
    });

    $locationProvider.html5Mode(true);

})
