import Joi from 'joi';

const warehouseSchema = Joi.object({
  name: Joi.string().min(3).required(),
  location: Joi.string().min(3).required(),
});

const validateWarehouse = (req, res, next) => {
  const { error } = warehouseSchema.validate(req.body);
  if (error) throw new Error('Fields invalid for warehouse');
  next();
};

export default validateWarehouse;
