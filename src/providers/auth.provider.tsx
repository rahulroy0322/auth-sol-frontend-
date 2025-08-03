import type {
  MeResponseType,
  RefreshResponseType,
} from "@/@types/responce.type";
import type { UserType } from "@/@types/user.type";
import { get } from "@/api/main";
import { ACCESS_KEY, REFRESH_KEY } from "@/config/auth";
import { saveToLocal } from "@/lib/local";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";

type AuthContextType = {
  user: UserType | undefined | null;
  token: string | undefined | null;
  error: string | null | undefined;
  fetchMe: () => Promise<void>;
};

const authContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderPropsType = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderPropsType> = ({ children }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [error, setError] = useState<AuthContextType["error"]>();
  const [token, setToken] = useState<AuthContextType["token"]>(() =>
    localStorage.getItem(ACCESS_KEY)
  );

  const fetchMe = useCallback(async () => {
    const token = localStorage.getItem(ACCESS_KEY);

    if (!token) {
      setUser(undefined);
      return;
    }
    try {
      const res = await get("/profile/me", {
        Authorization: `Bearer ${token}`,
      });

      const data = (await res.json()) as MeResponseType;

      if (!data.success) {
        const token = localStorage.getItem(REFRESH_KEY);
        const res = (await (
          await get("/auth/refresh", {
            Authorization: `Bearer ${token}`,
          })
        ).json()) as RefreshResponseType;

        if (!res.success) {
          throw new Error(res.message);
        }
        setToken(res.data.token.accessToken);
        setUser(res.data.user);
        saveToLocal(res.data);
        return;
      }

      setUser(data.data.user);
      setError(null);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
      setError(e.message);
      setUser(undefined);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return (
    <authContext.Provider
      value={{
        user,
        fetchMe,
        error,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const context = use(authContext);
  if (!context) {
    throw new Error('useAuth should be inside "AuthProvider"');
  }
  return context;
};

export { AuthProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useAuth;
