const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(0);
const orderStatus = Joi.string();
const orderDetail = Joi.string();
const paymentMethod = Joi.string();

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  orderStatus: orderStatus.required(),
  orderDetail: orderDetail.required(),
  paymentMethod: paymentMethod.required(),
});

const updateOrderSchema = Joi.object({
  orderStatus,
  orderDetail,
});

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
  getOrderSchema,
  createOrderSchema,
  updateOrderSchema,
  getItemSchema,
  addItemSchema,
  updateItemSchema,
};
