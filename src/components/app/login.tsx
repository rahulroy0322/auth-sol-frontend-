import type { FC, ReactNode } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Google from "../icons/google";
import Github from "../icons/github";
import LoginIllustration from "../illustrations/login";

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
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            to="/panel/recover"
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
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-card text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-foreground">
        <Button variant="outline" type="button" className="w-full">
          <Google />
          <span className="sr-only">Login with Google</span>
        </Button>
        <Button variant="outline" type="button" className="w-full">
          <Github />
          <span className="sr-only">Login with Github</span>
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4">
          Sign up
        </a>
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
