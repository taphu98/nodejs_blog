const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // Local host ---> Hosting
  // Action ---> Dispatcher ---> function handler


  app.use("/news",newsRouter);
  app.use("/search",siteRouter);
  app.use("/",siteRouter);


}

module.exports = route;
