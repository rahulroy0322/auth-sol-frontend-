import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type FC } from "react";
import ModeGroup from "./mode";
import {
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/config/country";
import { type CreateProjectReturnType } from "@/actions/project";

type CreateFormPropsType = {
  state: CreateProjectReturnType;
  isPending: boolean;
  // eslint-disable-next-line no-unused-vars
  formAction: (formData: FormData) => void;
};
const CreateForm: FC<CreateFormPropsType> = ({
  state,
  isPending,
  formAction,
}) => {
  return (
    <form action={formAction}>
      <SheetHeader>
        <SheetTitle>Create Your Project</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="grid gap-3">
          <Label>Name</Label>
          <Input
            defaultValue={String(state.name || "")}
            name="name"
            placeholder="Your App name"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label>Location</Label>
          <Select
            name="location"
            defaultValue={String(state.location || "")}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Your Country" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label>Mode</Label>
          <ModeGroup value={state.mode} />
        </div>
      </div>
      <SheetFooter>
        <Button disabled={isPending} type="submit">
          Create
        </Button>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

export default CreateForm;
