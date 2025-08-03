type UserType = {
  _id: string;
  uname: string;
  role: "user" | "owner" | "geast" | "editor" | "admin";
  email: string;
  projectId: string;
};

export type { UserType };
