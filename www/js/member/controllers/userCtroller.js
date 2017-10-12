angular.module('user.controllers',[])

.controller('UserCtrl',function ($scope,$state) {

  

  //个人设置
  $scope.seeUserProfile = function () {
    $state.go('tab.profile');
  },
  //查看订单
  $scope.seeUserOrder = function (entryType) {
    $state.go('tab.myOrder', {'entryType': entryType});
  }
  //在线咨询
  $scope.messageDetils=function () {
    $state.go('tab.online');
  }
  //生日设置
  $scope.goBir=function () {
    $state.go('tab.birthdayModify')
  }
  //地址添加
  $scope.addr=function () {
    $state.go('tab.address')
  }
  //关于我们
  $scope.seeAbout=function () {
    $state.go('tab.about');
  }
})


  .controller('onlineCtrl', function ($scope,messageData,$ionicHistory) {
    $scope.items=messageData.items;
    $scope.isUser = function(chatId) {
      if(chatId == id){
        return true;
      }else{
        return false;
      }
    };

    $scope.goBack=function(){
      $ionicHistory.goBack();
    };

  })

.controller('addrCtrl',function ($scope,$state) {
  $scope.addAddr=function () {
    $state.go('tab.addAddr')
  }
})
  .controller('adCtrl',function ($scope) {

  })

.controller('aboutCtrl',function ($scope,$state) {

})
