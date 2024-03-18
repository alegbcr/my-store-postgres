const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(3).max(150);
const image = Joi.string();
const price = Joi.number().integer();
const stock = Joi.number().integer();
const categoryId = Joi.number().integer();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),

  description: description.required(),
  image: image.required(),
  price: price.required(),
  categoryId: categoryId.required(),
  stock: stock,
});

const updateProductSchema = Joi.object({
  name: name,
  description: description,
  image: image,
  price: price,
  categoryId,
  stock,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  offset,
  limit,
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};
