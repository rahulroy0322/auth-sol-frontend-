import type { FC } from "react";
import {  useParams } from "react-router-dom";
import { projects } from "../projects";
import ProjectUi from "@/components/app/dashboard/project/project";

const ProjectPage: FC = () => {
  const { id } = useParams() as {
    id: string;
  };
  const project = projects.find((project) => project._id === id)!;

  // user changes
  const changes = {
    prev: 200,
    current: 400,
  };

  return (
    <ProjectUi {...changes} usersCount={1000} appsCount={project.apps.length} />
  );
};

export default ProjectPage;
