import type { FC } from "react";
import type { ProjectType } from "@/@types/project.type";
import ProjectsUi from "@/components/app/dashboard/projects";

const projects = [
  {
    _id: "1",
    name: "Project One",
    apps: [
      {
        _id: "1",
        name: "web app",
        type: "web",
      },
      {
        _id: "2",
        name: "android app",
        type: "android",
      },
    ],
    location: "Mumbai",
    mode: "prod",
  },
  {
    _id: "2",
    name: "Project Two",
    apps: [],
    location: "Kolkala",
    mode: "test",
  },
  {
    _id: "3",
    name: "Project Three",
    apps: [],
    location: "Delhi",
    mode: "dev",
  },
  {
    _id: "4",
    name: "Project Four",
    apps: [],
    location: "Siliguri",
    mode: "dev",
  },
  {
    _id: "5",
    name: "Project Five",
    apps: [],
    location: "Patna",
    mode: "dev",
  },
] as ProjectType[];

const Projects: FC = () => {
  return <ProjectsUi projects={projects} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export { projects };

export default Projects;
