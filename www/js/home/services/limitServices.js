angular.module('limit.services',[])

//限时抢购
  .factory('limitDatas',function () {
    var data=[];

    data.limits=[
      {
        src:'img/limit4.png',
        bt:'Mr.慕',
        price:'￥68.00',
        sale:'￥28.00'
      },
      {
        src:'img/limit3.png',
        bt:'豆趣',
        price:'￥210.00',
        sale:'￥156.00'
      }
    ]
    return data;
  })

  .factory('willDatas',function () {
    var data=[];

    data.wills=[
      {
        src:'img/will1.png',
        bt:'草莓格格',
        price:'￥230.00',
        sale:'￥115.00'
      },
      {
        src:'img/will7.png',
        bt:'雪上芭蕾',
        price:'￥250.00',
        sale:'￥125.00'
      },
      {
        src:'img/will5.png',
        bt:'四喜方子',
        price:'￥148.00',
        sale:'￥89.00'
      },
      {
        src:'img/will6.png',
        bt:'蓝莓派',
        price:'￥268.00',
        sale:'￥135.00'
      },
    {
         src:'img/will4.png',
         bt:'树莓芝士',
         price:'￥268.00',
         sale:'￥135.00'
    }
    ]
    return data;
  })
