const express = require('express');
const router = express.Router();
const InventoryService = require('../services/inventory.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createInventorySchema,
  // updateInventorySchema,
  // getInventorySchema,
} = require('../schemas/inventory.schema');

const service = new InventoryService();

router.get('/', async (req, res) => {
  const inventory = await service.find();
  res.json(inventory);
});

router.post(
  '/',
  validatorHandler(createInventorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newInventory = await service.create(body);
      res.status(201).json(newInventory);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
