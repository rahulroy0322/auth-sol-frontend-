"use server";

import type { LoginFromType, RegisterFromType } from "@/@types/auth.type";
import type {
  LoginResponseType,
  RegisterResponseType,
} from "@/@types/responce.type";
import { post } from "@/api/main";
import { formatJoiError } from "@/lib/joi";
import { saveToLocal } from "@/lib/local";
import { loginSchema, registerSchema } from "@/schema/auth";

const getFormData = (formData: FormData) => {
  const uname = formData.get("name");
  const email = formData.get("email");
  const passwd = formData.get("pass");

  return {
    uname,
    email,
    passwd,
  };
};

const register = async (_: unknown, formData: FormData) => {
  const _data = getFormData(formData);
  const { error, value } = registerSchema.validate(_data, {
    stripUnknown: true,
    abortEarly: false,
  });

  if (error) {
    return {
      error: {
        root: undefined,
        ...formatJoiError<RegisterFromType>(error),
      },
    };
  }

  const res = await post("auth/register", value);

  const data = (await res.json()) as RegisterResponseType;

  if (!data.success) {
    return {
      error: {
        root: data.message,
        email: undefined,
        passwd: undefined,
        uname: undefined,
      },
    };
  }

  saveToLocal(data.data);
  return {};
};

const login = async (_: unknown, formData: FormData) => {
  const _data = getFormData(formData);
  const { error, value } = loginSchema.validate(_data, {
    stripUnknown: true,
    abortEarly: false,
  });

  if (error) {
    return {
      error: {
        root: undefined,
        ...formatJoiError<LoginFromType>(error),
      },
    };
  }

  const res = await post("auth/login", value);

  const data = (await res.json()) as LoginResponseType;

  if (!data.success) {
    return {
      error: {
        root: data.message,
        email: undefined,
        passwd: undefined,
        uname: undefined,
      },
    };
  }
  saveToLocal(data.data);
  return {};
};

export { register, login };
