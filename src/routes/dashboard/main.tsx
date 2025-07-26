import { useEffect, type FC } from "react";
import { DashboardLayoutUi } from "@/components/app/dashboard/main";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "@/providers/auth.provider";

const DashboardLayout: FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user === undefined) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <DashboardLayoutUi>
      <Outlet />
    </DashboardLayoutUi>
  );
};

export default DashboardLayout;
