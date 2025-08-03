import type { FC } from "react";
import ProjectUi from "@/components/app/dashboard/project/project";
import useProject from "@/providers/project.provider";
import { Navigate } from "react-router-dom";
import useOverView, { OverViewProvider } from "@/providers/overview.provider";

const OverView: FC = () => {
  const { error, overView } = useOverView();

  if (overView === undefined || error) {
    return (
      <div>
        some error,
        {error}
      </div>
    );
  }

  return <ProjectUi overView={overView} />;
};

const ProjectPage: FC = () => {
  const { project, id } = useProject();

  if (project === undefined) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <OverViewProvider id={id}>
      <OverView />
    </OverViewProvider>
  );
};

export default ProjectPage;
