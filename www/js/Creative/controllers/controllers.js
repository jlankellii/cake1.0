angular.module('creative.controllers', [])

  .controller('CreativeCtrl',function ($scope,$state) {
    $scope.goCake=function () {
      $state.go('tab.everyCake');
    }
  })

.controller('everyCakeCtrl',function ($scope,$state,cakeData) {
  $scope.classes=cakeData.classes;
  $scope.special=function () {
    $state.go('tab.goodSpecial');
  }
})
