angular.module('starter.loginControllers',[])

  .controller('ToLogin', function($scope,CheckLogin,$ionicLoading, $ionicPopup,$ionicHistory, $state) {
    var oPhone=document.getElementById('phone');
    var oPass=document.getElementById('pass');
    oPhone.value=localStorage.phoneNum;
    oPass.value=localStorage.passWord;
    //登录
    $scope.checkUser=function () {
      var phoneNum=oPhone.value;
      var passWord=oPass.value;
      var arr=[];
      function findArr(){
        for(var phoneNum in localStorage){
          arr.push(localStorage[phoneNum]);
        }
        return arr;
      }
      var d=findArr();
      if(phoneNum!=""&&passWord!=""&&phoneNum==d[1]&&passWord==d[0]){
        alert('登录成功');
        $state.go('tab.home');
      }else if(phoneNum==d[1]&&passWord!=d[0]){
        alert('密码错误');
        $state.go('lostPassword');
      }else if(phoneNum!=d[1]){
        alert('用户不存在');
        $state.go('register');
      }
    }

      //注册按钮
     $scope.toRegister=function () {
       $state.go('register');
     }

      $scope.foget = function () {
        $state.go('lostPassword');
      }
    $scope.rollback=function () {
      $ionicHistory.goBack();
    }
  })
