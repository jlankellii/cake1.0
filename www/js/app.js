// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter',
  ['ionic',
    'home.controllers',
    'home.services',
    'home.directives',
    'new.controllers',
    'new.services',
    'user.controllers',
    'user.services',
    'creative.controllers',
    'creative.services',
    'choice.controllers',
    'disCard.controllers',
    'gradGood.controllers',
    'free.controllers',
    'limit.controllers',
    'limit.services',
    'starter.controllers',
    'starter.services',
    'starter.loginControllers',
    'starter.loginServices',
    'starter.directives',
    'starter.data',
    'starter.registerControllers',
    'starter.registerServices',
    'starter.lostPControllers',
    'member.profileController',
    'member.profileServices',
    'member.profileModifyControllers',
    'member.myOrderController',
    'member.myOrderServices',
    'goodSpecial.controllers',
    'goodSpecial.services',
    'locals.services',
    'utils.photo'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'js/tabs.html'
  })
  //主页
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'js/home/templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  //新品推荐
  .state('tab.new', {
      url: '/new',
      views: {
        'tab-new': {
          templateUrl: 'js/new/templates/new.html',
          controller: 'NewCtrl'
        }
      }
    })
    //我的
    .state('tab.user',{
      url:'/user',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/user-center.html',
          controller:'UserCtrl'
        }
      }
    })
  //创意蛋糕
  .state('tab.creative', {
    url: '/creative',
    views: {
      'tab-creative': {
        templateUrl: 'js/creative/templates/creative.html',
        controller: 'CreativeCtrl'
      }
    }
  })
  //限时优惠
    .state('tab.limitTime',{
      url:'/limitTime/',
      views:{
        'tab-home':{
          templateUrl:'js/home/templates/limitTime.html',
          controller:'limitCtrl'
        }
      }
    })
  //免费试吃
    .state('tab.free', {
      url: '/free/',
      views: {
        'tab-home': {
          templateUrl: 'js/home/templates/free.html',
          controller: 'freeCtrl'
        }
      }
    })
      //申请试吃表
    .state('tab.freeText',{
      url:'/freeText',
      views:{
        'tab-home':{
          templateUrl:'js/home/templates/freeText.html',
          controller:'freeTextCtrl'
        }
      }
    })
  //毕业季商品
    .state('tab.gradGood', {
      url: '/gradGood/',
      views: {
        'tab-home': {
          templateUrl: 'js/home/templates/gradGood.html',
          controller: 'gradGoodCtrl'
        }
      }
    })
   //优惠券
    .state('tab.disCard',{
      url:'/disCard',
      views:{
        'tab-home':{
          templateUrl:'js/home/templates/disCard.html',
          controller:'disCtrl'
        }
      }
    })
    //商品详情
    .state('tab.goodSpecial',{
      url:'/goodSpecial',
      views:{
        'tab-home':{
          templateUrl:'js/good/templates/goodSpecial.html',
          controller:'goodCtrl'
        }
      }
    })
    //冰皮
    .state('tab.tea',{
      url:'/tea',
      views:{
        'tab-home':{
          templateUrl:'js/home/templates/tea.html',
          controller:'teaCtrl'
        }
      }
    })
    //购物车
    .state('tab.shopcar',{
      url:'/shopcar',
      views:{
        'tab-home':{
          templateUrl:'js/good/templates/shopcar.html',
          controller:'shopcarCtrl'
        }
      }
    })
  //城市选择
  .state('tab.cityChoice',{
    url:'/cityChoice',
    views:{
      'tab-home':{
        templateUrl:'js/home/templates/cityChoice.html',
        controller:'cityChoiceCtrl'
      }
    }
  })
    //设置
    .state('tab.profile',{
      url:'/user/profile',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/profile.html',
          controller:'profileCtrl'
        }
      }
    })
    //查看所有订单
      .state('tab.myOrder',{
        url:'/user/myOrder',
        views:{
          'tab-user':{
            templateUrl:'js/member/templates/myOrder.html',
            controller:'myOrderCtrl'
          }
        }
      })
      //在线咨询
    .state('tab.online',{
      url:'/user/online',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/onlineConsult.html',
          controller:'onlineCtrl'
        }
      }
    })
    //地址管理
    .state('tab.address',{
      url:'/user/address',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/address.html',
          controller:'addrCtrl'
        }
      }
    })
      //添加地址
    .state('tab.addAddr',{
      url:'/user/addAddr',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/addAddr.html',
          controller:'adCtrl'
        }
      }
    })

    //关于我们
    .state('tab.about',{
      url:'/user/about',
      views:{
        'tab-user':{
          templateUrl:'js/member/templates/about.html',
          controlller:'aboutCtrl'
        }
      }
    })
    //蛋糕分类
    .state('tab.everyCake',{
      url:'creative/everyCake',
      views:{
        'tab-creative':{
          templateUrl:'js/Creative/templates/everyCake.html',
          controller:'everyCakeCtrl'
        }
      }
    })

    //登录
    .state('toLogin', {
      url: '/toLogin',
      templateUrl: 'js/general/templates/login.html',
      controller: 'ToLogin'
    })

    //注册
    .state('register', {
      url:  '/toLogin/register',
      templateUrl: 'js/general/templates/register.html',
      controller: 'RegisterCtrl'
    })

    //找回密码
    .state('lostPassword', {
      url: '/toLogin/lostPassword',
      templateUrl: 'js/general/templates/lostPassword.html',
      controller:'lostPController',
      cache:false
    })

    //设置-修改用户名
    .state('tab.nameModify', {
      url: '/user/profile/nameModify',
      views: {
        'tab-user': {
          templateUrl: 'js/member/templates/username-modify.html',
          controller: 'NameModifyCtrl'
        }
      }
    })
    //设置-修改邮箱
    .state('tab.emailModify', {
      url: '/user/profile/emailModify',
      views: {
        'tab-user': {
          templateUrl: 'js/member/templates/email-modify.html',
          controller: 'EmailModifyCtrl'
        }
      }
    })
    //设置-修改性别
    .state('tab.genderModify', {
      url: '/user/profile/genderModify',
      views: {
        'tab-user': {
          templateUrl: 'js/member/templates/gender-modify.html',
          controller: 'GenderModifyCtrl'
        }
      }
    })
  //设置-修改出生日期
    .state('tab.birthdayModify', {
      url: '/user/profile/birthdayModify',
      views: {
        'tab-user': {
          templateUrl: 'js/member/templates/birthday-modify.html',
          controller: 'BirthdayModifyCtrl'
        }
      }
    })
  //设置-修改密码
    .state('tab.passwordModify', {
      url: '/user/profile/passwordModify',
      views: {
        'tab-user': {
          templateUrl: 'js/member/templates/password-modify.html',
          controller: 'PasswordModifyCtrl'
        }
      }
    })
      // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/toLogin');

})

.directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      scope.$on('$ionicView.beforeEnter', function() {
        scope.$watch(attributes.hideTabs, function(value){
          $rootScope.hideTabs = value;
        });
      });

      scope.$on('$ionicView.beforeLeave', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
});
