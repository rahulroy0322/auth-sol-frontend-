import { LoginInfo } from "@/components/app/auth/login";
import RecoverUi, { RecoverFrom } from "@/components/app/auth/recover";
import type { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <RecoverUi>
      <RecoverFrom />
      <LoginInfo />
    </RecoverUi>
  );
};

export default RegisterPage;
