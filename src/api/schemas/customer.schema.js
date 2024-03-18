const Joi = require('joi');
const { createUserSchema } = require('./user.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastName = Joi.string();
const phone = Joi.number();
const nickname = Joi.string().min(5).max(10);
const email = Joi.string().email();
const password = Joi.string().min(8).max(16);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName,
  phone,
  user: createUserSchema,
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName,
  phone,
  user: Joi.object({
    nickname,
    email,
    password,
  }),
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
