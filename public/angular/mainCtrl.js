var app = angular.module('oldcountry')

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = $('nav');
}])

app.controller('mainCtrl', function($scope, $location, $anchorScroll, $timeout){

	$scope.goTo = function(id) {
		$location.path("/");

		$timeout(function(){
			$location.hash(id);
			$anchorScroll();
		}, 200);
	}

})