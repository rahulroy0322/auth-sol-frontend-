import type {
  OverViewResponseType,
} from "@/@types/responce.type";
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

type OverViewContextType = {
  overView:
    | {
        users: number;
        apps: number;
        changes: {
          prev: number;
          current: number;
        };
      }
    | undefined;
  error: string | undefined;
  reFetch: () => Promise<void>;
};

const overViewContext = createContext<OverViewContextType | undefined>(
  undefined
);

type OverViewProviderPropsType = {
  children: ReactNode;
  id: string;
};

const OverViewProvider: FC<OverViewProviderPropsType> = ({ children, id }) => {
  const [overView, setOverView] = useState<
    OverViewContextType["overView"] | null
  >(null);
  const [error, setError] = useState<OverViewContextType["error"]>();
  const { token } = useAuth();
  const reFetch = useCallback(async () => {
    try {
      const res = await get(`/project/${id}/overview`, {
        Authorization: `Bearer ${token}`,
      });

      const data = (await res.json()) as OverViewResponseType;

      if (!data.success) {
        throw new Error(data.message);
      }

      setOverView(data.data);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
      setError(e.message);
      setOverView(undefined);
    }
  }, [id, token]);

  useEffect(() => {
    reFetch();
  }, [reFetch]);

  if (!id) {
    return <div>Please provide id first</div>;
  }

  if (overView === null) {
    return <MainLoader />;
  }
  return (
    <overViewContext.Provider
      value={{
        reFetch,
        error,
        overView,
      }}
    >
      {children}
    </overViewContext.Provider>
  );
};

const useOverView = () => {
  const context = use(overViewContext);
  if (!context) {
    throw new Error('useOverView should be inside "OverViewProvider"');
  }
  return context;
};

export { OverViewProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useOverView;
