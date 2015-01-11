'use strict';

angular.module('calculator').directive('myButton', [
	function() {
		return {
			templateUrl: 'modules/calculator/directives/template/yours.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
])
	.run(function($templateCache){
		$templateCache.put('modules/calculator/directives/template/yours.html',
			'<button>Yours : )</button>');
	});
