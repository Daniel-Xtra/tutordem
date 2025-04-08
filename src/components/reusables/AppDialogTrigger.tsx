import { PiCaretRightBold } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { DialogTrigger } from "../ui/dialog";

const AppDialogTrigger = ({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick?: () => void;
}) => {
  return (
    <DialogTrigger asChild>
      <button
        className="w-full font-sans flex justify-between items-center rounded-sm cursor-pointer"
        onClick={onClick}
      >
        <div className="space-y-1.5 text-left">
          <p className="font-medium text-xs text-neutral-800">{title}</p>
          <p className="font-normal text-[11px] text-neutral-500">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
            pending
          </Badge>
          <PiCaretRightBold />
        </div>
      </button>
    </DialogTrigger>
  );
};

export default AppDialogTrigger;
