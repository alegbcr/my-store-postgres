const express = require('express');
const router = express.Router();
const OrderProductsService = require('../services/orderProduct.service');
const validatorHandler = require('../middlewares/validator.handler');
const { addOrderSchema } = require('../schemas/orderProduct.schema');

const service = new OrderProductsService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

/* Items routes */
router.post(
  '/add-item',
  validatorHandler(addOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
