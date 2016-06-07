angular.module('makeeditableApp', [])
.directive('makeEditable', function() {
	return {
		restrict: 'A',
		transclude: true,
		templateUrl: 'templates/make-editable.html',
		scope: true,
	}
})
.controller('makeeditableCtrl', function(){})