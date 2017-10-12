angular.module('member.profileController',[])

  .controller('profileCtrl',function ($scope,$ionicActionSheet,CameraTool){

    //显示选择相册，照相机弹框
    $scope.selectImg = function () {
      $ionicActionSheet.show({
        buttons: [
          {text: '<p>拍照</p>'},
          {text: '<p>从相册中选择</p>'}
        ],
        cancelText: '<p>取消</p>',
        cancel: function () {

        },
        buttonClicked: function (index) {
          if (0 == index) {
            CameraTool.getFromCamera(function (imageData) {
              $ionicLoading.show();
              uploadUserAvatar(imageData);

            }, function (error) {
              // $ionicLoading.hide();
              //get image filed
            });
          } else if (1 == index) {
            CameraTool.getFromPhotolib(function (imageData) {
              $ionicLoading.show();
              uploadUserAvatar(imageData);

            }, function (error) {
              // $ionicLoading.hide();
              //get image filed
            });
          }
          return true;
        }
      });
    }

    //更新头像
    function uploadUserAvatar(imageData) {
      UserInfoService.uploadUserAvatar($scope.userinfo.userId, imageData, function (result) {
        $ionicLoading.hide();
        $scope.userinfo.avatar = result.data;
        alert("头像修改成功");
      }, function () {
        $ionicLoading.hide();
        alert("网络故障,请稍后再试!");
      });
    }

    //注销
    $scope.exitZLG=function ($ionicHistory,$state,$ionicViewSwitcher) {
      var confirmPopup = $ionicPopup.confirm({
        title: '注销',
        template: '确定退出?',
        cancelText: '取消',
        cancelType: 'button-light button-small',
        okText: '确定',
        okType: 'button-small myTitle-bg'
      });
      confirmPopup.then(function (res) {
        if (res) {
          $ionicHistory.clearCache()
            .then(function () {
              localStorage.removeItem('user');
              //清空推送标签个别名
              $state.go('tab.home');
              $ionicViewSwitcher.nextDirection('back');
            });
        } else {
          return false;
        }
      });
    }
})

  .filter('formatUserInfo', function (pathService, UserInfoSupport) {
    return function (input, attribute) {
      var out = '';
      var userId = UserInfoSupport.getUserEntity().userId;
      switch (attribute) {
        case 'avatar':
          if(null != input && 0 != input.length){
            out = pathService.getFilePath()+input+'&&userId='+userId;
          }
          break;
        case 'defaultAvatar':
          if(null != input && 0 != input.length){
            out = pathService.getFilePath()+input;
          }
          break;
        case 'mobile':
          if (null != input && 11 == input.length) {
            out = input.substring(0, 3) + '****' +input.substring(8, 11);
          }
          break;
        case 'email':
          if (null != input && 0 != input.length) {
            var emailSplit = input.split('@');
            var emailCount = emailSplit[0];
            if (6 < emailCount.length) {
              emailCount = emailCount.substring(0, 3) + '***' + emailCount.substring(emailCount.length - 4, emailCount.length - 1);
            } else {
              emailCount = emailCount.substring(0, 1) + '***' + emailCount.substring(emailCount.length - 2, emailCount.length - 1);
            }
            out = emailCount + '@' + emailSplit[1];
          }
          break;
        case 'gender':
          out = 0==input ? '男' : '女';
          break;
        case 'aliAccount':
          if (null != input && 18 < input.length){
            out = input.substring(0, 18)+'...';
          }else{
            out = input;
          }
          break;
        case 'aliName':
          if (null != input && 8 < input.length){
            out = input.substring(0, 8)+'...';
          }else{
            out = input;
          }
          break;
        default:
          break;
      }

      return out;
    }
  });


