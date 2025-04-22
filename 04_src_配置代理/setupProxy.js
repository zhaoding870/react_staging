const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {   //遇到 /api1 开头的请求，就是触发该代理
      target: 'http://localhost:5000', //请求转发给谁
      changeOrigin: true,              //控制服务器收到的请求头中的 host 
      pathRewrite: { '^/api1': '' },   //重写请求路径(必须)
    }),
    createProxyMiddleware('/api2', {
        target: 'http://localhost:5001',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' },
      })
  );
};
