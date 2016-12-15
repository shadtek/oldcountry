var app = angular.module('oldcountry');

app.controller('mainCtrl', function($scope, $location){
	$scope.go = function(path) {
		$location.path(path)
	}

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
	}
})