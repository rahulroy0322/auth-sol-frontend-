import { LoginInfo } from "@/components/app/auth/login";
import RegisterUi, { RegisterFrom } from "@/components/app/auth/register";
import type { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <RegisterUi>
      <LoginInfo />
      <RegisterFrom />
    </RegisterUi>
  );
};

export default RegisterPage;
