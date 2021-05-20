const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/v3/search/book',
    proxy({
      target: 'https://dapi.kakao.com',
      changeOrigin: true,
    }),
  );
};
