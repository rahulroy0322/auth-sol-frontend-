import type { FC } from "react";
import { Link, Navigate, Outlet, useHref, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "../projects";

const DashboardProjectTab: FC = () => {
  // eslint-disable-next-line no-magic-numbers
  const pathName = useHref(window.location).split("/").at(4) || "overview";
  const { id } = useParams() as {
    id: string;
  };
  const project = projects.find((project) => project._id === id);

  if (!project) {
    return <Navigate to="/dashboard/" />;
  }

  return (
    <div className="pb-6">
      <Tabs defaultValue={pathName}>
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

const DashboardProjectLayout: FC = () => {
  return <DashboardProjectTab />;
};

export default DashboardProjectLayout;
