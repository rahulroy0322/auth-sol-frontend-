import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const RecoverFrom: FC = () => (
  <form className="p-6 md:p-8">
    <div className="h-full flex flex-col gap-6 justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Password Recovery</h1>
      </div>
      <div className="grid gap-3">
        <Label>Email</Label>
        <Input type="email" placeholder="m@example.com" required />
      </div>
      <Button type="submit" className="w-full">
        Recover
      </Button>
      <div className="text-center text-sm flex gap-2 items-center justify-center">
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
        <span>|</span>
        <Link to="/register" className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  </form>
);

type RegisterUiPropsType = {
  children: ReactNode;
};

const RecoverUi: FC<RegisterUiPropsType> = ({ children }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { RecoverFrom };

export default RecoverUi;
