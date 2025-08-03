import { useCallback, useEffect, useState, type FC } from "react";
import type { ProjectType } from "@/@types/project.type";
import ProjectsUi from "@/components/app/dashboard/projects";
import { get } from "@/api/main";
import useAuth from "@/providers/auth.provider";
import type { ProjectsResponseType } from "@/@types/responce.type";

const Projects: FC = () => {
  const { token } = useAuth();
  const [projects, setProjects] = useState<
    (ProjectType & { apps: number })[] | undefined | null
  >(null);
  const [error, setError] = useState<string | undefined>();

  const fetchProjects = useCallback(async () => {
    try {
      const res = await get("/project/", {
        Authorization: `Bearer ${token}`,
      });

      const data = (await res.json()) as ProjectsResponseType;

      if (!data.success) {
        throw new Error(data.message);
      }

      setProjects(data.data.projects);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
      setError(e.message);
      setProjects(undefined);
    }
  }, [token]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (error) {
    return (
      <div>
        some error
        <span>{error}</span>
        <p className="bg-destructive">todo</p>
      </div>
    );
  }

  if (projects === null || projects === undefined) {
    return (
      <div>
        some error
        <p className="bg-destructive">todo</p>
      </div>
    );
  }

  return <ProjectsUi projects={projects} />;
};

export default Projects;
