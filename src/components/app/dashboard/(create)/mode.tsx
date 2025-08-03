import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import type { ModeType } from "@/config/mode";
import { type LucideProps, Computer, FlaskConical, Server } from "lucide-react";
import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type FC,
  useState,
  useCallback,
} from "react";

type ModeGroupItemPropsType = {
  mode: ModeType;
  current: ModeType;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (mode: ModeType) => void;
  children: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

const ModeGroupItem: FC<ModeGroupItemPropsType> = ({
  mode,
  current,
  label,
  onChange,
  children: Icon,
}) => (
  <div className="flex items-center">
    <RadioGroupItem value={mode} id={mode} hidden />
    <Label onClick={() => onChange(mode)} htmlFor={mode}>
      <Toggle
        className="cursor-pointer"
        pressed={current === mode}
        aria-label={label}
      >
        <Icon className="h-4 w-4" />
      </Toggle>
    </Label>
  </div>
);

type ModeGroupPropsType = {
  value: string | undefined;
};
const ModeGroup: FC<ModeGroupPropsType> = ({ value }) => {
  const [mode, setMode] = useState<ModeType>((value || "dev") as ModeType);
  const onChange = useCallback((mode: ModeType) => setMode(mode), []);
  return (
    <RadioGroup name="mode" value={mode} className="flex items-center gap-3">
      <ModeGroupItem
        mode="dev"
        current={mode}
        onChange={onChange}
        label="Toggle Development Mode"
      >
        {Computer}
      </ModeGroupItem>
      <ModeGroupItem
        mode="prod"
        current={mode}
        onChange={onChange}
        label="Toggle Production Mode"
      >
        {Server}
      </ModeGroupItem>
      <ModeGroupItem
        mode="test"
        current={mode}
        onChange={onChange}
        label="Toggle Test Mode"
      >
        {FlaskConical}
      </ModeGroupItem>
    </RadioGroup>
  );
};

export default ModeGroup;
