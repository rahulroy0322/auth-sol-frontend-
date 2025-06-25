import LoginUi, { LoginFrom, LoginInfo } from "@/components/app/auth/login";
import type { FC } from "react";

const LoginPage: FC = () => {
  return (
    <LoginUi>
      <LoginInfo />
      <LoginFrom />
    </LoginUi>
  );
};

export default LoginPage;
