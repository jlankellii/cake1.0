angular.module('home.controllers',[])

.controller('HomeCtrl',function ($scope,$state,GoodData,$ionicLoading) {
  loadData();
  $scope.cityChoose=function () {
    $state.go('tab.cityChoice');
  }
  $scope.graduate=function () {
    $state.go('tab.gradGood');
  }
  $scope.discount=function () {
    $state.go('tab.disCard')
  }
  $scope.freeEat=function () {
    $state.go('tab.free');
  }
  $scope.limitTime=function () {
    $state.go('tab.limitTime');
  }
  $scope.special=function () {
    $state.go('tab.goodSpecial')
  }
  $scope.goTime=function () {
    $state.go('tab.limitTime')
  }
  $scope.goBp=function () {
    $state.go('tab.tea')
  }

  $scope.items=GoodData.items;


  function loadData() {//从本地的一个包含全国各城市的json文件中加载数据
    $http.get("js/home/json/city.json").success(function (data) {
      $scope.cityDatas = data.cityDatas;
      $ionicLoading.hide();
    });
  }

})
.controller('teaCtrl',function ($scope,$state,$ionicHistory,bannerList) {
  $scope.goBack=function(){
    $ionicHistory.goBack();
  };
  $scope.data=bannerList.data;
  $scope.goShop=function () {
    $state.go('tab.shopcar');
  }

  //跳转咨询
  $scope.goTalk=function () {
    $state.go('tab.online');
  }
})


