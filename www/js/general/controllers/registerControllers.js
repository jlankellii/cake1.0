angular.module( 'starter.registerControllers',[])

  .controller('RegisterCtrl',function($scope,$state,$ionicHistory) {
    var oPhone=document.getElementById('phone');
    var oName=document.getElementById('name');
    var oPass=document.getElementById('pass');
    oPhone.value=localStorage.phoneNum;
    oName.value=localStorage.userName;
    oPass.value=localStorage.passWord;

    $scope.checkPhone=function(){
      var userName=oName.value;
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
      if(phoneNum!=""&&phoneNum==d[1]){
        alert('账户已注册');
        $state.go('toLogin');
      }else if(phoneNum!=""&&phoneNum!=d[1]){
        localStorage.phoneNum=phoneNum;
        localStorage.userName=userName;
        localStorage.passWord=passWord;
        alert('注册成功');
        $state.go('toLogin');
      }

    }

    $scope.rollback=function () {
      $ionicHistory.goBack();
    }
  })


