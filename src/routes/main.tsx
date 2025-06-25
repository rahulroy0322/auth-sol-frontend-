import { lazy, type FC } from "react";
import { Route, Routes } from "react-router-dom";

const LoginRoute = lazy(() => import("./auth/login"));
const RegisterRoute = lazy(() => import("./auth/register"));
const RecoverRoute = lazy(() => import("./auth/recover"));

const MainRouter: FC = () => (
  <Routes>
    <Route>
      <Route index element={<>home</>} />
      <Route>
        <Route path="login" element={<LoginRoute />} />
        <Route path="register" element={<RegisterRoute />} />
        <Route path="recover" element={<RecoverRoute />} />
      </Route>
    </Route>
  </Routes>
);

export default MainRouter;
