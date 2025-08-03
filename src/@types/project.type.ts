type ProjectType = {
  _id: string;
  name: string;
  location: string;
  mode: "dev" | "prod" | "test";
};

type ProjectFromType = {
  name: string;
  location: string;
  mode: string;
};

export type { ProjectType, ProjectFromType };
