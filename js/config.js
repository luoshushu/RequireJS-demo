requirejs.config({
  baseUrl: 'js', //用于加载模块的根路径。在配置这个属性后，以后的文件都是在这个路径下查找内容了。
  paths: {
    app: 'app' 
  },
});

requirejs(['app'], function (app) {
  app.init();
});