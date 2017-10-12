angular.module('creative.services',[])

  .factory('cakeData',function () {
    var data={};

    data.classes=[
      //左侧
      {src:'img/cheese/c1.jpg', bt:'雪域牛乳芝士蛋糕', bty:'Le Cheesecake', price:'￥234.00', sale: '558'},
      {src:'img/cheese/c2.jpg', bt:'提拉米苏乐脆蛋糕', bty:'Tiramisu Crispy', price:'￥265.00', sale:'683'},
      {src:'img/cheese/c3.jpg', bt:'你好米菲', bty:'Hello miffy', price:'￥220.00', sale:'145'},
      {src:'img/cheese/c4.jpg', bt:'雪域牛乳芝士蛋糕', bty:'Le Cheesecake', price:'￥234.00', sale: '558'},
      {src:'img/cheese/c5.jpg', bt:'提拉米苏乐脆蛋糕', bty:'Tiramisu Crispy', price:'￥265.00', sale:'683'},
      {src:'img/cheese/c6.jpg', bt:'你好米菲', bty:'Hello miffy', price:'￥220.00', sale:'145'},
      {src:'img/cheese/c7.jpg', bt:'雪域牛乳芝士蛋糕', bty:'Le Cheesecake', price:'￥234.00', sale: '558'},
      {src:'img/cheese/c8.jpg', bt:'提拉米苏乐脆蛋糕', bty:'Tiramisu Crispy', price:'￥265.00', sale:'683'},
      {src:'img/cheese/c9.jpg', bt:'你好米菲', bty:'Hello miffy', price:'￥220.00', sale:'145'},

    ]
    return data;
  })
