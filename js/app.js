// 因为用到了hello和hello2，所以需引入['hello','hello2']
 define(['hello','hello2'], function(x,y) { //hello的参数x ，hello2的参数y
  var app = {
    init:function(){
      x.init() //hello
      y.init() //hello2
      console.log('这里是app') 
    }
  }
  return app //把app返回出去，对应的config.js里面。
  
});