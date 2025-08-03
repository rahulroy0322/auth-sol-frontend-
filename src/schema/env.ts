import type { envType } from "@/@types/env.type";
import Joi from "joi";
const envSchema = Joi.object<envType>({
  VITE_APP_API_URI: Joi.string().uri().required().messages({
    "any.required": "API URI is required",
    "string.uri": "API URI must be valid URL",
  }),
});

const { error, value } = envSchema.validate(import.meta.env, {
  abortEarly: false,
  allowUnknown:false,
  stripUnknown: true,
});

if (error) {
  console.error(error);
  throw new Error("something went wrong");
}

const env = value

export { env };
