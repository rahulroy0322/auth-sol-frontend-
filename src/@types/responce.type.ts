import type { UserType } from "./user.type";

type ErrorResponseType = {
  success: false;
  message: string;
};

type MeResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        user: Omit<UserType, "password">;
      };
    };

type RefreshSuccessResponseType = {
  success: true;
  data: {
    user: Omit<UserType, "password">;
    token: {
      accessToken: string;
      refreshToken: string;
    };
  };
};
type RefreshResponseType = ErrorResponseType | RefreshSuccessResponseType;

type LoginResponseType = RefreshResponseType;
type RegisterResponseType = RefreshResponseType;

export type {
  MeResponseType,
  RegisterResponseType,
  LoginResponseType,
  RefreshResponseType,
  RefreshSuccessResponseType,
};
