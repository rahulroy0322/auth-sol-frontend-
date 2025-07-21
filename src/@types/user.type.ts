type UserType = {
  _id: string;
  uname: string;
  role: "user" | "owner" | "geast" | "editor" | "admin";
  email: string;
  password?: string;
  "2fa": {
    enabled: boolean;
  };
};

export type { UserType };
