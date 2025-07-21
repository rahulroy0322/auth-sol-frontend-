import type { AppType } from "./app.type";

type ProjectType = {
  _id: string;
  name: string;
  location: string;
  apps: AppType[];

  mode: "dev" | "prod" | "test";
};

export type { ProjectType };
