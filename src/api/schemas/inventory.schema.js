const Joi = require('joi');

const id = Joi.number().integer();
const productId = Joi.number().integer();
const monthInventory = Joi.string();
const yearInventory = Joi.number().integer();
const supervisior = Joi.string();
const employee = Joi.string();

const createInventorySchema = Joi.object({
  productId: productId.required(),
  monthInventory: monthInventory.required(),
  yearInventory: yearInventory.required(),
  supervisior: supervisior.required(),
  employee: employee.required(),
});

const updateInventorySchema = Joi.object({
  productId,
  monthInventory,
  yearInventory,
  supervisior,
  employee,
});

const getInventorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createInventorySchema,
  updateInventorySchema,
  getInventorySchema,
};
