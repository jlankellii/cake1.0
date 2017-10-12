angular.module('starter.lostPControllers',[])

.controller('lostPController',function ($scope,$state) {

  //验证码
  $scope.time = 60000;

  //手机号
  var oPhone=document.getElementById('phone');
  var oPass=document.getElementById('pass');
   oPhone.value=localStorage.phoneNum;
   oPass.value=localStorage.passWord;
   $scope.resetPassword=function () {
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
     if(phoneNum==d[1]&&passWord!=d[0]){
       alert('修改密码成功');
       $state.go('toLogin');
     }else if(phoneNum!=d[1]){
       alert('用户不存在');
       $state.go('register');
     }
   }
$scope.rollback=function () {
    $state.go('toLogin');
  }

})
//验证码
  .directive('timerbutton', function($timeout, $interval){
    return {
      restrict: 'AE',
      scope: {
        showTimer: '=',
        timeout: '='
      },
      link: function(scope){
        scope.timer = false;
        scope.timeout = 60000;
        scope.timerCount = scope.timeout / 1000;
        scope.text = "获取验证码";

        scope.onClick = function(){
          scope.showTimer = true;
          scope.timer = true;
          scope.text = "秒后重新获取";
          var counter = $interval(function(){
            scope.timerCount = scope.timerCount - 1;
          }, 1000);

          $timeout(function(){
            scope.text = "获取验证码";
            scope.timer = false;
            $interval.cancel(counter);
            scope.showTimer = false;
            scope.timerCount = scope.timeout / 1000;
          }, scope.timeout);
        }
      },
      template: '<button on-tap="onClick()" class="button button-small button-outline button-assertive text-center" ng-disabled="timer"><span ng-if="showTimer">{{ timerCount }}</span>{{text}}</button>'
    };
  });
