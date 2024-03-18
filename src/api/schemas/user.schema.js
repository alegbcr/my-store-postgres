const Joi = require('joi');

const id = Joi.number().integer();
const nickname = Joi.string().min(5).max(10);
const email = Joi.string().email();
const password = Joi.string().min(8).max(16);
const role = Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
  nickname: nickname.required(),
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateUserSchema = Joi.object({
  nickname,
  email: email,
  password: password,
  role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
