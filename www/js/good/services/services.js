angular.module('goodSpecial.services',[])

.factory('goodData',function () {
  var data={};

  data.items = [{
    "src":"img/free5.png",
    "name": "香草芝士",
    "price": 78.00
  }, {
    "src":"img/cake1.png",
    "name": "提拉米苏乐脆蛋糕",
    "price": 265.00
  }, {
    "src":"img/will1.png",
    "name": "草莓格格",
    "price": 115.00
  }, {
    "src":"img/gre3.png",
    "name": "咖啡沃鲁托蛋糕",
    "price": 298.00
  }, ];
  return data;

})


