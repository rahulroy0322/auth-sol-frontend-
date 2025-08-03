"use server";

import type { ProjectFromType } from "@/@types/project.type";
import type { ProjectResponseType } from "@/@types/responce.type";
import { post } from "@/api/main";
import { ACCESS_KEY } from "@/config/auth";
import { formatJoiError } from "@/lib/joi";
import { projectSchema } from "@/schema/project";

const getFormData = (formData: FormData) => {
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const mode = formData.get("mode") as string;

  return {
    name,
    location,
    mode,
  };
};

type CreateProjectReturnType = {
  error:
    | ({
        root: undefined;
      } & Record<keyof ProjectFromType, string[]>)
    | ({
        root: string;
      } & Record<keyof ProjectFromType, undefined>);
} & Record<keyof ProjectFromType, undefined | string>;

const createProject = async (_: unknown, formData: FormData) => {
  const _data = getFormData(formData);
  const token = localStorage.getItem(ACCESS_KEY);

  const { error, value } = projectSchema.validate(_data, {
    stripUnknown: true,
    abortEarly: false,
  });

  if (error) {
    return {
      error: {
        root: undefined,
        ...formatJoiError<ProjectFromType>(error),
      },
      ..._data,
    } satisfies CreateProjectReturnType;
  }

  const res = await post("project/", value, {
    Authorization: `Bearer ${token}`,
  });

  const data = (await res.json()) as ProjectResponseType;

  if (!data.success) {
    return {
      error: {
        root: data.message,
        name: undefined,
        location: undefined,
        mode: undefined,
      },
      ..._data,
    } satisfies CreateProjectReturnType;
  }

  return {};
};

export type { CreateProjectReturnType };
export { createProject };
