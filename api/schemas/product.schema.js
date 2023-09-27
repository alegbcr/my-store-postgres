const Joi = require('joi');

const id = Joi.string().uuid();
const category = Joi.string();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(3).max(50);
const image = Joi.string();
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  category: category,
  description: description,
  image: image,
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  category: category,
  description: description,
  image: image,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
