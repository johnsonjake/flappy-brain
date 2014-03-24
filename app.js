var app = angular.module('app', ['firebase'])
.filter('toArray', function(){
  return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
      array.push(input[objectKey]);
    }

    return array;
  }
})
.controller('appCtrl', ['$scope', '$firebase', '$window', function($scope, $firebase, $window) {
	var scoreRef = new Firebase("https://flappy-brain.firebaseio.com/scores");
	$scope.scores = $firebase(scoreRef);

	$scope.user = {};
	
	$scope.$watch(function() {
		return $window.score;
	}, function(n, o) {
		$scope.user.score = n;
	}, true);

	$scope.sendScore = function() {
		$scope.scores.$add($scope.user);
	};
}]);