angular.module('disCard.controllers',[])

.controller('disCtrl',function ($scope) {
  $scope.disChange=function () {
    alert('领取成功');
    var img=$scope.cards[0];
    var url=img.src;
    img.src=img.getAttribute('src2');
    img.setAttribute('src2',url);
  }


  $scope.disChange1=function () {
    alert('领取成功');
    document.getElementById('pic1').setAttribute('src', 'img/5_1.png');
  }
  $scope.disChang2=function () {
    alert('领取成功');
    document.getElementById('pic2').setAttribute('src', 'img/10_1.png');
  }
  $scope.disChange3=function () {
    alert('领取成功');
    document.getElementById('pic3').setAttribute('src', 'img/20_1.png');
  }
  $scope.disChange4=function () {
    alert('领取成功');
    document.getElementById('pic4').setAttribute('src', 'img/40_1.png');
  }
  $scope.disChange5=function () {
    alert('领取成功');
    document.getElementById('pic5').setAttribute('src', 'img/100_1.png');
  }

})
