import { lazy, type FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginRoute = lazy(() => import("./auth/login"));
const RegisterRoute = lazy(() => import("./auth/register"));
const RecoverRoute = lazy(() => import("./auth/recover"));
const DashboardLayout = lazy(() => import("./dashboard/main"));
const DashboardProjects = lazy(() => import("./dashboard/projects"));
const DashboardProjectLayout = lazy(() => import("./dashboard/project/main"));
const DashboardProjectPage = lazy(() => import("./dashboard/project/id"));
const DashboardProjectUsersPage = lazy(
  () => import("./dashboard/project/user")
);
const DashboardProjectSettingsPage = lazy(
  () => import("./dashboard/project/settings")
);
const DashboardProjectAppsPage = lazy(
  () => import("./dashboard/project/apps")
);

const MainRouter: FC = () => (
  <Routes>
    <Route>
      <Route path="dashboard/" element={<DashboardLayout />}>
        <Route index element={<DashboardProjects />} />
        <Route path="project/:id" element={<DashboardProjectLayout />}>
          <Route index element={<DashboardProjectPage />} />
          <Route path="users/" element={<DashboardProjectUsersPage />} />
          <Route path="settings/" element={<DashboardProjectSettingsPage />} />
          <Route path="apps/" element={<DashboardProjectAppsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>

      <Route>
        <Route path="login" element={<LoginRoute />} />
        <Route path="register" element={<RegisterRoute />} />
        <Route path="recover" element={<RecoverRoute />} />
      </Route>
    </Route>
  </Routes>
);

export default MainRouter;
