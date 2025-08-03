import { useActionState, type FC } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { createProject, type CreateProjectReturnType } from "@/actions/project";
import CreateForm from "./form";
import { useNavigate } from "react-router-dom";

type CreateDialogPropsType = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
};
const CreateDialog: FC<CreateDialogPropsType> = ({ open, setOpen }) => {
  const [state, formAction, isPending] = useActionState(createProject, {
    error: undefined,
    name: undefined,
  });
  const navigate = useNavigate();
  if (!("error" in state)) {
    // eslint-disable-next-line no-magic-numbers
    navigate(0);
    return;
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom">
        <CreateForm
          formAction={formAction}
          state={state as CreateProjectReturnType}
          isPending={isPending}
        />
      </SheetContent>
    </Sheet>
  );
};

export default CreateDialog;
