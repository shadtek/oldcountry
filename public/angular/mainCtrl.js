var app = angular.module('oldcountry')

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = $('nav');
}])

app.controller('mainCtrl', function($scope, $location, $anchorScroll){

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
	}

})