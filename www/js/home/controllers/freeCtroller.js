angular.module('free.controllers',[])

.controller('freeCtrl',function ($scope,FreeGoodData,$state) {
  $scope.freeGs=FreeGoodData.freeGs;
  $scope.useFree=function () {
    $state.go('tab.freeText');
  }

})

.controller('freeTextCtrl',function ($scope,$state) {
  var _scope=$scope;
  _scope.user = {phoneNum: '', name: '',address:'',num:''};
    _scope.checkForm = function() {
     if(_scope.user.name==""||_scope.user.address==""||_scope.user.num==""||_scope.user.phoneNum == ""){
       alert("请输入正确的信息！");
       return false;
     }
     else{
       alert("保存成功");
       $state.go('tab.home');
     }
    };
})
