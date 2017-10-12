angular.module('user.services',[])
.factory('messageData',function () {
  var data={}
  data.items=[
    {
      content:'亲，在吗？',
      cont:'亲，请问有什么可以帮您的？'
    },
    {
      content:'就是想问一下成都地区可以发货吗？',
      cont:'亲，这是可以的，一般两到三天就可以到成都'
    },
    {
      content:'谢谢',
      cont:'不用谢'
    }
  ]
  return data;
})
