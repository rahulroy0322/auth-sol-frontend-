import type { AppType } from "@/@types/app.type";
import ProjectAppsUi from "@/components/app/dashboard/project/apps";
import type { FC } from "react";

const apps: AppType[] = [
  {
    _id: "c6758931-69b9-43d7-ba99-470ddcae05bc",
    name: "nwiskar0",
    type: "web",
    updateAt: "2025-03-02 11:02:06",
  },
  {
    _id: "bc7badcc-08f8-44d9-abb1-2d1c3d957c34",
    name: "gedwinson1",
    type: "android",
    updateAt: "2024-11-16 02:39:44",
  },
  {
    _id: "a0596390-3943-4e60-a2e8-7279799c89c5",
    name: "bblackaller2",
    type: "cross",
    updateAt: "2024-10-02 05:09:08",
  },
  {
    _id: "183f266f-8813-440e-aff3-caf6c103ec57",
    name: "owiper3",
    type: "ios",
    updateAt: "2025-02-23 19:54:52",
  },
  {
    _id: "43b616cb-3694-4bb2-9456-802853f9f0e3",
    name: "ebrinicombe4",
    type: "native",
    updateAt: "2025-03-12 16:37:52",
  },
];

const ProjectAppsPage: FC = () => {
  return <ProjectAppsUi apps={apps} />;
};

export default ProjectAppsPage;
