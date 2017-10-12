angular.module('gradGood.controllers',[])

.controller('gradGoodCtrl',function ($scope,$state,gradGoodData) {
  $scope.items=gradGoodData.items;
  $scope.special=function () {
    $state.go('tab.goodSpecial')
  }
})
