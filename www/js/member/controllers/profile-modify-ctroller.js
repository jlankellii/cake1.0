angular.module('member.profileModifyControllers',['ion-datetime-picker'])

.controller('NameModifyCtrl',function ($scope) {

  $scope.save=function () {
    if($scope.input.alias==null||$scope.input.alias.length==0){
      alert("昵称不能为空");
    }
    if (null == $scope.input.alias || 0 == $scope.input.alias.length) {
      alert("昵称不能为空");
      return;
    }
    if (11 < $scope.input.alias.length) {
      alert("昵称不超过11字");
      return;
    }
    var reg = /\s/;
    if (reg.test($scope.input.alias)) {
      alert("昵称禁止输入空格");
      return;
    }
    var reg2 = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    if (!reg2.test($scope.input.alias)) {
      alert("昵称禁止输入特殊字符");
      return;
    }
  }
})

.controller('EmailModifyCtrl',function ($scope) {
  $scope.save = function () {
    if (null == $scope.input.email || 0 == $scope.input.email.length) {
      alert("邮箱不能为空");
      return;
    }
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test($scope.input.email) || $scope.input.email.length > 200) {
      alert("邮箱格式不正确");
      return;
    }
    var reg2 = /\s/;
    if (reg2.test($scope.input.email)) {
      alert("邮箱禁止输入空格");
      return;
    }
  }
})

  .controller('GenderModifyCtrl', function ($scope) {
    $scope.gender='0';
    $scope.genderList = [
      {gender: '男', value: '0'},
      {gender: '女', value: '1'}
    ];
    $scope.save = function () {
    }
  })

.controller('BirthdayModifyCtrl',function ($scope,$ionicHistory) {
  $scope.title = '选择生日';

  $scope.save = function () {
    $ionicLoading.show();
  };
})

.controller('PasswordModifyCtrl',function ($scope,
                                       $state,
                                       $ionicLoading,
                                       $ionicHistory
                                       ) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.input = {oldPassword: '', newPassword: ''};
  });
  $scope.downAction = function () {
    if (0 == $scope.input.oldPassword.length || 0 == $scope.input.newPassword.length) {
      alert("密码不能为空");
      return;
    }
    if (6 > $scope.input.newPassword.length) {
      alert("密码不少于6字");
      return;
    }
    if (15 < $scope.input.newPassword.length) {
      alert("密码不超过15字");
      return;
    }
    var reg = /\s/;
    if (reg.test($scope.input.newPassword)) {
      alert("密码禁止输入空格");
      return;
    }

    var member = UserInfoSupport.getUserEntity();
    $ionicLoading.show();
    UserInfoService.updateUserPassword(member.userId, $scope.input.oldPassword, $scope.input.newPassword,
      function (result) {
        $ionicLoading.hide();
        if (200 == result.flag){
          alert("密码修改成功");
          $ionicHistory.goBack();
        }else if (500 == result.flag) {
          alert("原始密码错误！");
        }
      }, function () {
        $ionicLoading.hide();
      });
    $timeout(function () {
      $ionicLoading.hide();
    },pathService.getTimeout());
  }
})
