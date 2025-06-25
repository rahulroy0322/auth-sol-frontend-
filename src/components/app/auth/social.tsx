import Github from "@/components/icons/github";
import Google from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Socials: FC = () => (
  <>
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
  </>
);

export default Socials;
