const Joi = require('joi');

const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(0);

/* ITEM SCHEMA */
const getItemSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

const updateItemSchema = Joi.object({
  amount,
});

module.exports = {
  getItemSchema,
  addItemSchema,
  updateItemSchema,
};
