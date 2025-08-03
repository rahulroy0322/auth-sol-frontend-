import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DashboardProjectTabUiPropsType = {
  id: string;
  path: string;
};

const DashboardProjectTabUi: FC<DashboardProjectTabUiPropsType> = ({
  id,
  path,
}) => {
  return (
    <div className="pb-6">
      <Tabs defaultValue={path}>
        <div className="px-6 pb-6 bg-gray-700">
          <TabsList>
            <TabsTrigger value="overview">
              <Link to={`/dashboard/project/${id}/`}>Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="users">
              <Link to={`/dashboard/project/${id}/users`}>Users</Link>
            </TabsTrigger>
            <TabsTrigger value="apps">
              <Link to={`/dashboard/project/${id}/apps`}>Apps</Link>
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Link to={`/dashboard/project/${id}/settings`}>Settings</Link>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent asChild value="overview">
          <Outlet />
        </TabsContent>
        <TabsContent asChild value="users">
          <Outlet />
        </TabsContent>
        <TabsContent asChild value="apps">
          <Outlet />
        </TabsContent>
        <TabsContent asChild value="settings">
          <Outlet />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardProjectTabUi;
