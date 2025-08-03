import type { FC } from "react";
import { Navigate, useHref, useParams } from "react-router-dom";
import useProject, { ProjectProvider } from "@/providers/project.provider";
import DashboardProjectTabUi from "@/components/app/dashboard/project/main";

const DashboardProjectTab: FC = () => {
  // eslint-disable-next-line no-magic-numbers
  const pathName = useHref(window.location).split("/").at(4) || "overview";

  const { project, id } = useProject();

  if (project === undefined) {
    return <Navigate to="/dashboard/" />;
  }

  return <DashboardProjectTabUi id={id} path={pathName} />;
};

const DashboardProjectLayout: FC = () => {
  const { id } = useParams() as {
    id: string;
  };

  return (
    <ProjectProvider id={id}>
      <DashboardProjectTab />
    </ProjectProvider>
  );
};

export default DashboardProjectLayout;
