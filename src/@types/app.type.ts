type AppType = {
  _id: string;
  name: string;
  createdAt: string;
} & (
  | {
      type: "android" | "ios" | "cross" | "native";
    }
  | {
      type: "web";
      url: string;
    }
);
export type { AppType };
