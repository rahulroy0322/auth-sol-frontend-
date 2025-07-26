type RegisterFromType = {
  uname: string;
} & LoginFromType;

type LoginFromType = {
  email: string;
  passwd: string;
};
export type { RegisterFromType, LoginFromType };
