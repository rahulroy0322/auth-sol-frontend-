import type { AppType } from "@/@types/app.type";
import type { AppsByProjectIdResponseType } from "@/@types/responce.type";
import { get } from "@/api/main";
import ProjectAppsUi from "@/components/app/dashboard/project/apps";
import MainLoader from "@/components/app/ui/loader";
import useAuth from "@/providers/auth.provider";
import useProject from "@/providers/project.provider";
import { useEffect, useState, type FC } from "react";

const ProjectAppsPage: FC = () => {
  const [apps, setApps] = useState<AppType[] | undefined | null>(null);
  const [error, setError] = useState<string | undefined>();
 const {id}= useProject()
  const { token } = useAuth();

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await get(`/project/${id}/apps`, {
          Authorization: `Bearer ${token}`,
        });

        const data = (await res.json()) as AppsByProjectIdResponseType;

        if (!data.success) {
          throw new Error(data.message);
        }
        setApps(data.data.apps);
        setError(undefined);
      } catch (e) {
        if (!(e instanceof Error)) {
          throw e;
        }
        setError(e.message);
        setApps(undefined);
      }
    };
    fetchApps();
  }, [id, token]);

  if (apps === null) {
    return <MainLoader />;
  }

  if (apps === undefined || error) {
    return (
      <div>
        some error,
        {error}
      </div>
    );
  }

  return <ProjectAppsUi apps={apps} />;
};

export default ProjectAppsPage;
