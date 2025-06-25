import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC, ReactNode } from "react";
import Socials from "./social";
import { Link } from "react-router-dom";

const RegisterFrom: FC = () => (
  <form className="p-6 md:p-8">
    <div className="h-full flex flex-col gap-6 justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="text-muted-foreground text-balance">
          Create Your Account to{" "}
          <span className="capitalize text-primary">Auth sol</span>
        </p>
      </div>
      <div className="grid gap-3">
        <Label>User Name</Label>
        <Input type="text" placeholder="jonhdow" required />
      </div>
      <div className="grid gap-3">
        <Label>Email</Label>
        <Input type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-3">
        <Label>Password</Label>
        <Input type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
      <Socials />
      <div className="text-center text-sm">
        Already got an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          LogIn
        </Link>
      </div>
    </div>
  </form>
);

type RegisterUiPropsType = {
  children: ReactNode;
};

const RegisterUi: FC<RegisterUiPropsType> = ({ children }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              {children}
            </CardContent>
          </Card>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export { RegisterFrom };

export default RegisterUi;
