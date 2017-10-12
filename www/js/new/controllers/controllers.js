angular.module('new.controllers', [])

.controller('NewCtrl',function ($scope,$state,GoodsData) {
  $scope.special=function () {
    $state.go('tab.goodSpecial');
  }
 $scope.items=GoodsData.items;

})
