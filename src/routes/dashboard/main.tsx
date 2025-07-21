import type { FC } from "react";
import { DashboardLayoutUi } from "@/components/app/dashboard/main";
import { Outlet } from "react-router-dom";

const DashboardLayout: FC = () => {
  return (
    <DashboardLayoutUi>
      <Outlet />
    </DashboardLayoutUi>
  );
};

export default DashboardLayout;
