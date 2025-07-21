import type { FC } from "react";
import { ContentWraper } from "@/components/app/dashboard/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectUiPropsType = {
  prev: number;
  current: number;
  appsCount: number;
  usersCount: number;
};

const ProjectUi: FC<ProjectUiPropsType> = ({
  prev,
  current,
  appsCount,
  usersCount,
}) => (
  <ContentWraper className="py-6 flex flex-col gap-4">
    <h2 className="text-2xl font-light text-foreground">Overview</h2>

    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Apps</CardTitle>
          <CardDescription>Total Apps</CardDescription>
        </CardHeader>
        <CardContent>
          <PluralCount
            className="text-center"
            count={appsCount}
            text="App"
            plural="Apps"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auth</CardTitle>
          <CardDescription>Total Users</CardDescription>
        </CardHeader>
        <CardContent>
          <PluralCount
            className="text-center"
            count={usersCount}
            text="User"
            plural="Users"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Chenges in Auth</CardDescription>
        </CardHeader>
        <ChangesCardContent prev={prev} current={current} />
      </Card>
    </div>
  </ContentWraper>
);

type PluralCountPropsType = {
  count: number;
  plural: string;
  text: string;
  className?: string;
};
const PluralCount: FC<PluralCountPropsType> = ({
  className,
  count,
  plural,
  text,
}) => {
  // eslint-disable-next-line no-magic-numbers
  if (count <= 0) {
    return <p className={className}>No {text}</p>;
  }
  return (
    <p className={className}>
      {count} {plural}
    </p>
  );
};

type ChangesCardContentPropsType = {
  prev: number;
  current: number;
};

const ChangesCardContent: FC<ChangesCardContentPropsType> = ({
  prev,
  current,
}) => {
  const isPossitive = current > prev;
  return (
    <CardContent className="flex items-center justify-center">
      <div
        className={cn("w-min p-1 flex", {
          "text-green-500 items-start": isPossitive,
          "text-destructive items-end": !isPossitive,
        })}
      >
        <span>{Math.abs(prev - current)}</span>
        <ChangesIcon className="size-4" isPossitive={isPossitive} />
      </div>
    </CardContent>
  );
};

type ChangesIconPropsType = {
  className: string;
  isPossitive: boolean;
};

const ChangesIcon: FC<ChangesIconPropsType> = ({ isPossitive, ...props }) => {
  if (isPossitive) {
    return <ChevronUp {...props} />;
  }
  return <ChevronDown {...props} />;
};

export default ProjectUi;
