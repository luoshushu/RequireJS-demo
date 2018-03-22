// 因为用到了jQuery所以需要引入
define(['jQuery'], function() {
var b = {
  init:function(){
      $('.box').append( "<p>段落</p>" )
      console.log("hello2")
  }
}
return b //把b给返回出去
});