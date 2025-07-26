
import type { LoginFromType, RegisterFromType } from "@/@types/auth.type";import Joi from "joi";

const passwordSchema = Joi.string()
  .trim()
  .min(8)
  .max(100)
  .custom((value: string, helpers) => {
    const uppercaseCount = (value.match(/[A-Z]/g) || []).length;
    const lowercaseCount = (value.match(/[a-z]/g) || []).length;
    const numberCount = (value.match(/\d/g) || []).length;
    const specialCount = // eslint-disable-next-line no-useless-escape
      (value.match(/[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`]/g) || []).length;

    if (uppercaseCount < 2) {
      return helpers.error("password.uppercase");
    }
    if (lowercaseCount < 2) {
      return helpers.error("password.lowercase");
    }
    if (numberCount < 2) {
      return helpers.error("password.numbers");
    }
    if (specialCount < 2) {
      return helpers.error("password.special");
    }
    if (/\s/.test(value)) {
      return helpers.error("password.whitespace");
    }

    return value;
  })
  .messages({
    "string.min": "Password must be at least 8 characters long",
    "string.max": "Password must not exceed 100 characters",
    "password.uppercase": "Password must contain at least 2 uppercase letters",
    "password.lowercase": "Password must contain at least 2 lowercase letters",
    "password.numbers": "Password must contain at least 2 numbers",
    "password.special": "Password must contain at least 2 special characters",
    "password.whitespace": "Password must not contain whitespace",
    "string.empty": "Password is required",
  });

const unameSchema = Joi.string()
  .trim()
  .pattern(/^\S+$/, "no whitespace allowed in User Name")
  .messages({
    "string.empty": "User Name is required",
  });
const emailSchema = Joi.string()
  .trim()
  .email({
    minDomainSegments: 2,
    tlds: false,
    // tlds: { allow: ['com', 'net', 'org', 'edu', 'gov'] },
  })
  .messages({
    "string.email": "Please enter a valid Email address",
    "string.empty": "Email is required",
  });

const registerSchema = Joi.object<RegisterFromType>({
  uname: unameSchema.required(),
  email: emailSchema.required(),
  passwd: passwordSchema.required(),
});
const loginSchema = Joi.object<LoginFromType>({
  email: emailSchema.required(),
  passwd: passwordSchema.required(),
});

export { registerSchema, loginSchema };
