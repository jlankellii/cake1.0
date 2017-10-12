angular.module('home.services',[])


.factory('GoodData',function () {
  var data={};

  data.items=[
    {
      src:'img/cake2.png',
      bt:'雪域牛乳芝士蛋糕',
      bty:'Le Cheesecake',
      price:'￥234.00',
      sale: '558'
    },
    {
      src:'img/cake1.png',
      bt:'提拉米苏乐脆蛋糕',
      bty:'Tiramisu Crispy',
      price:'￥265.00',
      sale:'683'
    },
    {
      src:'img/cake3.png',
      bt:'你好米菲',
      bty:'Hello miffy',
      price:'￥220.00',
      sale:'145'
    }
    ]
  return data;
})

  .factory('gradGoodData',function () {
    var data={};

    data.items=[
      {
        src:'img/gre1.png',
        bt:'巧克力四重奏蛋糕',
        bty:'Chocolate Quartet',
        price:'￥298.00',
        sale: '500'
      },
      {
        src:'img/gre2.png',
        bt:'凡尔赛蛋糕',
        bty:'Versailles Cake',
        price:'218.00',
        sale:'683'
      },
      {
        src:'img/cake3.png',
        bt:'你好米菲',
        bty:'Hello miffy',
        price:'￥220.00',
        sale:'145'
      },
      {
        src:'img/gre3.png',
        bt:'咖啡沃鲁托蛋糕',
        bty:'Coffee Volluto Cake',
        price:'￥298.00',
        sale:'345'
      },
      {
        src:'img/gre4.png',
        bt:'巧克力松露蛋糕',
        bty:'Chocolate Marquise',
        price:'￥298.00',
        sale:'645'
      }
    ]
    return data;
  })
//免费试用
.factory('FreeGoodData',function () {
  var data={};

  data.freeGs=[
    {
      src:'img/free1.png',
      bt:'巧克力魔法',
      price:'￥143.00',
      limit:'限量3件'
    },
    {
      src:'img/free2.png',
      bt:'听我指挥',
      price:'￥189.00',
      limit:'限量3件'
    },
    {
      src:'img/free5.png',
      bt:'香草芝士',
      price:'￥78.00',
      limit:'限量6件'
    },
    {
      src:'img/free3.png',
      bt:'鲜果趴',
      price:'￥203.00',
      limit:'限量2件'
    },
    {
      src:'img/free4.png',
      bt:'黑白慕斯',
      price:'￥89.00',
      limit:'限量8件'

    }
  ]
  return data;
})

.factory('cardDatas',function () {
  var data1={};
  data1.cards=[
    {
      id:1,
      src:'img/5.png',
      src2:'img/5_1.png'
    },
    {
      id:2,
      src:'img/10.png',
      src2:'img/10_1.png'
    },
    {
      id:3,
      src:'img/20.png',
      src2:'img/20_1.png'
    },
    {
      id:4,
      src:'img/40.png',
      src2:'img/40_1.png'
    },
    {
      id:5,
      src:'img/100.png',
      src2:'img/100_1.png'
    }
  ]
  return data1;
})
