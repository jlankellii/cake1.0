angular.module( 'goodSpecial.controllers',[])

.controller('goodCtrl',function ($scope,$state,$ionicHistory) {

  //返回上一页
  $scope.goBack=function(){
    $ionicHistory.goBack();
  };
  $scope.goShop=function () {
    $state.go('tab.shopcar');
  }

  //跳转咨询
  $scope.goTalk=function () {
    $state.go('tab.online');
  }

})

  .controller('shopcarCtrl',function ($scope,goodData) {
    $scope.items=goodData.items;
    //删除项目
    $scope.delGood=function (index) {
      if($scope.items[index]) {
        $scope.items.splice(index, 1);
      }
    }
    $scope.addS=function ($scope) {
      $scope.items.splice(1,0,{"src":"img/free5.png", "name": "香草芝士", "price": 78.00});
    }
    var len = $scope.items.length;
    var arr = [];
    // 循环为数组赋值
    for (var i = 0; i < len; i++) {
      arr[i] = 0;
    }
    // 检测是否变化，为了总价能够改变
    $scope.$watch("varlist.itemNum", function() {
      getNum();
      getTotal();
    }, true);
    // 定义变量
    $scope.varlist = {
      itemNum: arr,
      number:0,
      total: 0
    }
    // 购物的时候操作
    $scope.buy = function($index) {
      $scope.varlist.itemNum[$index]++;
      getNum();
      getTotal();
    }
    // -----
    $scope.minus = function($index) {
      if ($scope.varlist.itemNum[$index] == 0) {
        return;
      } else {
        $scope.varlist.itemNum[$index]--;
        getNum();
        getTotal();
      }
    }
    // ++++
    $scope.add = function($index) {
      $scope.varlist.itemNum[$index]++;
      getNum();
      getTotal();
    }
    //计算总数量
    var getNum=function ($index) {
      $scope.varlist.number=0;
      for (var j = 0; j < len; j++) {
        $scope.varlist.number = $scope.varlist.number + $scope.varlist.itemNum[j];
      }
      return $scope.varlist.number;
    }
    // 计算总价
    var getTotal = function($index) {
      $scope.varlist.total = 0;
      for (var j = 0; j < len; j++) {
        $scope.varlist.total = $scope.varlist.total + $scope.varlist.itemNum[j] * $scope.items[j].price;
      }
      return $scope.varlist.total;
    }

  })


