import { lazy, type FC } from "react";
import { Route, Routes } from "react-router-dom";

const LoginRoute = lazy(() => import("./auth/login"));
const RegisterRoute = lazy(() => import("./auth/register"));

const MainRouter: FC = () => (
  <Routes>
    <Route>
      <Route index element={<>home</>} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />
    </Route>
  </Routes>
);

export default MainRouter;
