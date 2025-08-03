import ProjectSettingsUi from "@/components/app/dashboard/project/settings";
import useProject from "@/providers/project.provider";
import type { FC } from "react";

const ProjectSettingsPage: FC = () => {
  const { project } = useProject();
  return <ProjectSettingsUi name={project?.name || ""} />;
};

export default ProjectSettingsPage;
