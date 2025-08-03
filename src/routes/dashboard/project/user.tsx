import type { UsersByProjectIdResponseType } from "@/@types/responce.type";
import type { UserType } from "@/@types/user.type";
import { get } from "@/api/main";
import { UsersUi } from "@/components/app/dashboard/project/users";
import MainLoader from "@/components/app/ui/loader";
import useAuth from "@/providers/auth.provider";
import useProject from "@/providers/project.provider";
import { useEffect, useState, type FC } from "react";

const ProjectUsersPage: FC = () => {
  const [users, setUsers] = useState<UserType[] | undefined | null>(null);
  const [error, setError] = useState<string | undefined>();
  const { id } = useProject()

  const { token } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await get(`/project/${id}/users`, {
          Authorization: `Bearer ${token}`,
        });

        const data = (await res.json()) as UsersByProjectIdResponseType;

        if (!data.success) {
          throw new Error(data.message);
        }
        setUsers(data.data.users);
        setError(undefined);
      } catch (e) {
        if (!(e instanceof Error)) {
          throw e;
        }
        setError(e.message);
        setUsers(undefined);
      }
    };
    fetchUsers();
  }, [id, token]);

  if (users === null) {
    return <MainLoader />;
  }

  if (users === undefined || error) {
    return (
      <div>
        some error,
        {error}
      </div>
    );
  }

  return <UsersUi users={users} />;
};

export default ProjectUsersPage;
