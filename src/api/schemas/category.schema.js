const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image,
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
