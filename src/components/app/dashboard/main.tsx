import type { FC, ReactNode } from "react";
import NavBar from "./navbar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";

type ContentWraperPropsType = {
  children: ReactNode;
  className?: string;
};

const ContentWraper: FC<ContentWraperPropsType> = ({ className, children }) => (
  <div className={cn("px-6", className)}>{children}</div>
);

type DashboardTabUiPropsType = {
  path: string;
};
const DashboardTabUi: FC<DashboardTabUiPropsType> = ({ path }) => {
  return (
    <div className="pb-6">
      <Tabs defaultValue={path}>
        <div className="px-6 pb-6 bg-gray-700">
          <TabsList>
            <TabsTrigger value="projects">
              <Link to="/dashboard/projects">Projects</Link>
            </TabsTrigger>
            <TabsTrigger value="members">
              <Link to="/dashboard/members">Members</Link>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent asChild value="projects">
          <Outlet />
        </TabsContent>
        <TabsContent asChild value="members">
          <Outlet />
        </TabsContent>
      </Tabs>
    </div>
  );
};

type DashboardLayoutUIPropsType = {
  children: ReactNode;
};

const DashboardLayoutUi: FC<DashboardLayoutUIPropsType> = ({ children }) => (
  <div className="min-h-screen">
    <NavBar />

    <main>
      <div className="bg-gray-700 px-6 py-6 flex items-center gap-2">
          <h1 className="text-3xl font-light text-foreground capitalize">
            Personal projects
          </h1>
          <Badge variant="secondary" className="text-gray-300">
            Free
          </Badge>
      </div>

      {children}
    </main>
  </div>
);

export { DashboardLayoutUi, DashboardTabUi, ContentWraper };
