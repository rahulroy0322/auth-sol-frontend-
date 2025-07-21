import type { FC } from "react";
import { ContentWraper } from "@/components/app/dashboard/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProjectSettingsUi: FC = () => (
  <ContentWraper className="py-6 flex flex-col gap-4">
    <h2 className="text-2xl font-light text-foreground">Settings</h2>

    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Name</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label>Name</Label>
          <Input className="rounded-sm" placeholder="Project Name" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Delete Project</CardTitle>
          <CardDescription>Delete the project</CardDescription>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  </ContentWraper>
);


export default ProjectSettingsUi;
