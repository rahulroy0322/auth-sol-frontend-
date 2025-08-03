import type { ProjectType } from "@/@types/project.type";
import type { ProjectResponseType } from "@/@types/responce.type";
import { get } from "@/api/main";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import useAuth from "./auth.provider";
import MainLoader from "@/components/app/ui/loader";

type ProjectContextType = {
  project: ProjectType | undefined;
  id: string;
  error: string | undefined;
  reFetch: () => Promise<void>;
};

const projectContext = createContext<ProjectContextType | undefined>(undefined);

type ProjectProviderPropsType = {
  children: ReactNode;
  id: string;
};

const ProjectProvider: FC<ProjectProviderPropsType> = ({ children, id }) => {
  const [project, setProject] = useState<ProjectContextType["project"] | null>(
    null
  );
  const [error, setError] = useState<ProjectContextType["error"]>();
  const { token } = useAuth();
  const reFetch = useCallback(async () => {
    try {
      const res = await get(`/project/${id}`, {
        Authorization: `Bearer ${token}`,
      });

      const data = (await res.json()) as ProjectResponseType;

      if (!data.success) {
        throw new Error(data.message);
      }

      setProject(data.data.project);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
      setError(e.message);
      setProject(undefined);
    }
  }, [id, token]);

  useEffect(() => {
    reFetch();
  }, [reFetch]);

  if (!id) {
    return <div>Please provide id first</div>;
  }

  if (project === null) {
    return <MainLoader />;
  }
  return (
    <projectContext.Provider
      value={{
        reFetch,
        error,
        project,
        id,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

const useProject = () => {
  const context = use(projectContext);
  if (!context) {
    throw new Error('useProject should be inside "ProjectProvider"');
  }
  return context;
};

export { ProjectProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useProject;
