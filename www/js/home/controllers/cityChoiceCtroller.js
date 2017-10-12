angular.module('choice.controllers', ['home.controllers'])


  .controller('cityChoiceCtrl',function ($scope,$state,$ionicScrollDelegate,$ionicLoading,$http) {
    loadData();
    function loadData() {//从本地的一个包含全国各城市的json文件中加载数据
      $ionicLoading.show();
      $http.get("js/home/json/city.json").success(function (data) {
        $scope.cityDatas = data.cityDatas;
        $ionicLoading.hide();
      });
    }
    $scope.choice=function (obj) {
      console.log(obj.innerHTML);
    }
  })
