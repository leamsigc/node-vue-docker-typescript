import Joi from "@hapi/joi";

const authSchema = Joi.object({
  username: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().lowercase().min(6).max(255).required(),
  password: Joi.string().min(6).max(255).required()
});
const logInSchemaVal = Joi.object({
  username: Joi.string().min(2).max(255).required(),
  password: Joi.string().min(6).max(255).required()
});
export default authSchema;
export { logInSchemaVal };
