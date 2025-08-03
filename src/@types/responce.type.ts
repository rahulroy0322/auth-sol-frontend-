import type { AppType } from "./app.type";
import type { ProjectType } from "./project.type";
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

type ProjectsResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        projects: (ProjectType & {
          apps: number;
        })[];
      };
    };
type ProjectResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        project: ProjectType;
      };
    };

type UsersByProjectIdResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        users: UserType[];
      };
    };
type AppsByProjectIdResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        apps: AppType[];
      };
    };
type OverViewResponseType =
  | ErrorResponseType
  | {
      success: true;
      data: {
        users: number;
        apps: number;
        changes: {
          prev: number;
          current: number;
        };
      };
    };

export type {
  MeResponseType,
  RegisterResponseType,
  LoginResponseType,
  RefreshResponseType,
  RefreshSuccessResponseType,
  ProjectsResponseType,
  ProjectResponseType,
  UsersByProjectIdResponseType,
  AppsByProjectIdResponseType,
  OverViewResponseType,
};
