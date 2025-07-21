import { Card, CardContent } from "@/components/ui/card";
import type { FC } from "react";
import { ContentWraper } from "./main";
import { Button } from "@/components/ui/button";
import type { ProjectType } from "@/@types/project.type";
import { Link } from "react-router-dom";

type ProjectPropsType = {
  project: ProjectType;
};
const Project: FC<ProjectPropsType> = ({
  project: {
    _id,
    name,
    apps: { length },
    location,
  },
}) => (
  <Card className="min-h-36 relative">
    <Link to={`/dashboard/project/${_id}`}>
      <CardContent>
        <span className="text-muted-foreground capitalize text-sm">
          {length || "no"} apps
        </span>

        <h3 className="text-xl font-semibold text-foreground">{name}</h3>

        <span className="capitalize text-sm text-foreground absolute right-5 bottom-5">
          {location}
        </span>
      </CardContent>
    </Link>
  </Card>
);

const CreateProject: FC = () => (
  <Card className="min-h-36 cursor-pointer">
    <CardContent className="flex flex-col items-center justify-center h-full">
      <h3 className="text-xl font-semibold text-foreground">
        Create a new Project
      </h3>
    </CardContent>
  </Card>
);

type ProjectsPropsType = {
  projects: ProjectType[];
};

const ProjectsUi: FC<ProjectsPropsType> = ({ projects }) => (
  <ContentWraper className="py-6 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-light text-foreground">Projects</h2>
      <Button size="sm">Create Project</Button>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {projects.map((project) => (
        <Project project={project} key={project._id} />
      ))}
      <CreateProject />
    </div>
    <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between">
      {/* 
                // TODO
                 */}
      <div className="flex gap-2 items-center">
        <select defaultValue={"6"}>
          {Array.from({
            length: 10,
          }).map((_, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>
        <p>Projects par page. total {projects.length}</p>
      </div>
      <div>pagination</div>
    </div>
  </ContentWraper>
);

export default ProjectsUi;
