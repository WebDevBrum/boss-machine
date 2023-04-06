const Joi = require("joi");

const minionSchema = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  weaknesses: Joi.string(),
  salary: Joi.number(),
});

const minionUpdateSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string(),
  title: Joi.string(),
  weaknesses: Joi.string(),
  salary: Joi.number(),
});

const validate = (schema) => {
  return (req, res, next) => {
    const minion = req.body;
    const { error, value } = schema.validate(minion);
    req.schemaError = error;
    req.value = value;
    next();
  };
};

module.exports = {
  validate,
  minionUpdateSchema,
  minionSchema,
};
