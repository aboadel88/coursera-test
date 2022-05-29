(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController',function ($scope) {
    $scope.name = "mahmoud";
    $scope.sayHello = function () {
      return "Hello Abo Adel" ;

    };

  });
})();
