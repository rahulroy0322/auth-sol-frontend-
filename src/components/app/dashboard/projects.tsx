/* eslint-disable no-magic-numbers */
import { Card, CardContent } from "@/components/ui/card";
import { useState, type FC } from "react";
import { ContentWraper } from "./main";
import { Button } from "@/components/ui/button";
import type { ProjectType } from "@/@types/project.type";
import { Link } from "react-router-dom";
import CreateDialog from "./(create)/main";
import { getAppOrPlural } from "@/intl/plural";


type ProjectPropsType = {
  project: ProjectType;
  apps: number;
};
const Project: FC<ProjectPropsType> = ({
  project: { _id, name, location },
  apps,
}) => (
  <Card className="min-h-36 relative">
    <Link to={`/dashboard/project/${_id}`}>
      <CardContent>
        <span className="text-muted-foreground text-sm">
          {apps || "No"} {getAppOrPlural(apps)}
        </span>

        <h3 className="text-xl font-semibold text-foreground">{name}</h3>

        <span className="capitalize text-sm text-foreground absolute right-5 bottom-5">
          {location}
        </span>
      </CardContent>
    </Link>
  </Card>
);

type CreateProjectPropsType = {
  openDialog: () => void;
};

const CreateProject: FC<CreateProjectPropsType> = ({ openDialog }) => (
  <Card className="min-h-36 cursor-pointer">
    <CardContent className="flex flex-col items-center justify-center h-full">
      <Button asChild variant="ghost" onClick={openDialog}>
        <h3 className="text-xl font-semibold text-foreground">
          Create a new Project
        </h3>
      </Button>
    </CardContent>
  </Card>
);

type ProjectsPropsType = {
  projects: (ProjectType & {
    apps: number;
  })[];
};

const ProjectsUi: FC<ProjectsPropsType> = ({ projects }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ContentWraper className="py-6 flex flex-col gap-4">
      <CreateDialog open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-foreground">Projects</h2>
        <Button onClick={() => setOpen(true)} size="sm">
          Create Project
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map(({ apps, ...project }) => (
          <Project apps={apps} project={project} key={project._id} />
        ))}
        <CreateProject openDialog={() => setOpen(true)} />
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
};

export default ProjectsUi;
