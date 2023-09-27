const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const nickname = Joi.string().min(5).max(10);
const email = Joi.string().email();
const phone = Joi.string().min(3).max(15);
const country = Joi.string().min(3).max(15);
const region = Joi.string().min(3).max(15);
const postalZip = Joi.number();
const address = Joi.string().min(3).max(25);

const createUserSchema = Joi.object({
  name: name.required(),
  nickname,
  email: email.required(),
  phone: phone,
  country: country,
  region: region,
  postalZip: postalZip,
  address: address,
});

const updateUserSchema = Joi.object({
  name: name,
  nickname,
  email: email,
  phone: phone,
  country: country,
  region: region,
  postalZip: postalZip,
  address: address,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
