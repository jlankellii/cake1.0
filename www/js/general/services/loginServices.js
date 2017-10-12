angular.module('starter.loginServices', [])

  .factory('CheckLogin',function ($http) {
    return {
      getUserMessage:function (phoneNum,password) {
        var phoneNum = phoneNum;
        var pwd = password;
        //参数
        var data = {'mobile':phoneNum,'userPassword':pwd,'type':type};
        //发送请求
        var promise = $http.jsonp(url,{params:data});
        return promise;
      }
    }
  })
