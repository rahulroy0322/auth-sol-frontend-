import type { UserType } from "@/@types/user.type";
import type { FC } from "react";
import { ContentWraper } from "../main";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

type UsersUiPropsType = {
  users: UserType[];
};
const UsersUi: FC<UsersUiPropsType> = ({ users }) => {
  return (
    <ContentWraper className="py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-foreground">Users</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Uname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(({ _id, role, email, uname }) => (
            <TableRow
              key={_id}
              className={cn({
                "bg-destructive/50":
                  role === "admin" || role === "owner" || role === "editor",
              })}
            >
              {/* eslint-disable-next-line no-magic-numbers */}
              <TableCell>{_id.substring(0, 8)}</TableCell>
              <TableCell>{uname}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    role === "admin" || role === "owner"
                      ? "destructive"
                      : role === "editor" || role === "user"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {role}
                </Badge>
              </TableCell>
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
};

export { UsersUi };
