const express = require('express');

const homeRouter = require('./home.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const ordersRouter = require('./orders.router');
const orderProductsRouter = require('./orderProducts.router');
const inventoryRouter = require('./inventory.router');

function routerApi(app) {
  const router = express.Router();

  // Web Site
  app.use('/', router);
  router.use('/', homeRouter);

  // API REST
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
  router.use('/order-products', orderProductsRouter);
  router.use('/inventory', inventoryRouter);
}

module.exports = routerApi;
