const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required().messages({
    "string.min": `Password should be min {#limit} characters..`,
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  emailSchema,
};
