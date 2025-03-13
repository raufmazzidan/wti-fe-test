import classFusion from "@/utils/class-fusion";
import { FC } from "react";

interface IStatus {
  color: "red" | "green";
  label: string;
}

const BG = {
  red: "bg-red-500",
  green: "bg-red-600",
};

const Status: FC<IStatus> = (props) => {
  const { color, label } = props;

  return (
    <div
      className={classFusion(
        "px-2 py-1 rounded-xs inline-flex text-xs uppercase font-semibold text-white my-2",
        BG[color]
      )}
    >
      {label}
    </div>
  );
};

export default Status;
