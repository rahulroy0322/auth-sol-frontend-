import useAuth from "@/providers/auth.provider";
import { type FC, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const NotLoggedInLayout: FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user?._id) {
      navigate("/dashboard");
    }
  }, [navigate, user?._id]);
  return <Outlet />;
};


export default NotLoggedInLayout