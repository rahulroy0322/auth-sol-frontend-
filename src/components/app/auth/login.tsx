import LoginIllustration from "@/components/illustrations/login";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import Socials from "./social";

const LoginInfo: FC = () => {
  return (
    <div className="bg-muted relative hidden md:block">
      <h1 className="text-3xl font-bold capitalize text-primary text-center absolute top-5 left-1/2 -translate-x-1/2">
        Auth Sol
      </h1>
      <LoginIllustration className="px-2" />
      <p className="text-balance text-2xl bottom-5 w-1/2 absolute left-1/2 -translate-x-1/2">
        Build Hustel Free of{" "}
        <span className="font-bold text-primary">Auth</span>
      </p>
    </div>
  );
};

const LoginFrom: FC = () => (
  <form className="p-6 md:p-8">
    <div className="h-full flex flex-col gap-6 justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground text-balance">
          Login to your{" "}
          <span className="capitalize text-primary">Auth sol</span> account
        </p>
      </div>
      <div className="grid gap-3">
        <Label>Email</Label>
        <Input type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label>Password</Label>
          <Link
            to="/recover"
            className="ml-auto text-sm underline-offset-2 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <Socials />
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  </form>
);

type LoginUiPropsType = {
  children: ReactNode;
};

const LoginUi: FC<LoginUiPropsType> = ({ children }) => {
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

export { LoginFrom, LoginInfo };

export default LoginUi;
