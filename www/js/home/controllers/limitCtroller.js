angular.module('limit.controllers',[])

.controller('limitCtrl',function ($scope,$state,limitDatas,willDatas) {
  $scope.limits=limitDatas.limits;
  $scope.wills=willDatas.wills;
  //默认选择
  $scope.isActive = true;
  $scope.noActive = false;
  //查看距离结束
  $scope.endSale = function () {
    $scope.isActive = true;
    $scope.noActive = false;
    $scope.contentUrl = 'js/home/templates/endSale.html';
  };
  //即将开始
  $scope.willSale=function () {
    $scope.isActive=false;
    $scope.noActive=true;
    $scope.contentUrl='js/home/templates/willSale.html';
  }

  $scope.special=function () {
    $state.go('tab.goodSpecial')
  }
})
