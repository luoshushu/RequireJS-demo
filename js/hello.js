// 因为用到了jQuery所以需要引入
define(['jQuery'], function() {
var a = {
  init:function(){
    console.log($('.box').html())
    console.log("hello")
  }
}
return a //把a给返回出去
});