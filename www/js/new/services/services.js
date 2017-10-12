angular.module('new.services',[])

.factory('GoodsData',function () {
  var data={};

  data.items=[
    {
      src:'img/cake5.png',
      bt:'雪域大理石芝士蛋糕',
      bty:'Marble Cheesecake',
      price:'￥298.00',
      sale: '558'
    },
    {
      src:'img/cute.png',
      bt:'萝莉·冰淇淋蛋糕',
      bty:'Cheese&StrawberrySnowBear',
      price:'￥298.00',
      sale:'689'
    },
    {
      src:'img/flower.png',
      bt:'玫瑰雪域芝士蛋糕',
      bty:'Rose Cheesecake',
      price:'￥320.00',
      sale:'888'
    },
    {
      src:'img/wordc.png',
      bt:'环游世界·秋冬季蛋糕',
      bty:'Around The World Cake',
      price:'￥336.00',
      sale:'439'
    }
    ];
  return data;
})
