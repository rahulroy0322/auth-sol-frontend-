import type { AppType } from "@/@types/app.type";
import Android from "@/components/icons/android";
import AppStore from "@/components/icons/appStore";
import Flutter from "@/components/icons/flutter";
import Html5 from "@/components/icons/html";
import React from "@/components/icons/react";
import { Button } from "@/components/ui/button";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import { ContentWraper } from "../main";
import type { FC } from "react";

type ProjectAppTypePropsType = {
  type: AppType["type"];
};
const ProjectAppType: FC<ProjectAppTypePropsType> = ({ type }) => {
  switch (type) {
    case "android":
      return <Android />;
    case "ios":
      return <AppStore />;
    case "cross":
      return <Flutter />;
    case "native":
      return <React />;
    case "web":
    default:
      return <Html5 />;
  }
};

type ProjectAppsUiPropsType = {
  apps: AppType[];
};

const ProjectAppsUi: FC<ProjectAppsUiPropsType> = ({ apps }) => (
  <ContentWraper className="py-6 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-light text-foreground">Apps</h2>
    </div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {apps.map(({ _id, name, type, updateAt }) => (
          <TableRow key={_id}>
            {/* eslint-disable-next-line no-magic-numbers */}
            <TableCell>{_id.substring(0, 8)}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>
              <Button size="icon" variant="ghost">
                <ProjectAppType type={type} />
              </Button>
            </TableCell>
            <TableCell>{updateAt}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </ContentWraper>
);

export default ProjectAppsUi;
