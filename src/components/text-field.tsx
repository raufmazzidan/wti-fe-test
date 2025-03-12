import classFusion from "@/utils/class-fusion";
import { cva } from "class-variance-authority";
import { FC } from "react";

export interface ITextField
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
}

const textFieldStyle = cva(
  "box-border outline-none h-11 inline-flex w-full items-center justify-between gap-3 rounded border bg-white px-4 focus-within:!border-violet-500 hover:border-violet-900",
  {
    variants: {
      isError: {
        true: "border-red-500 hover:!border-red-500",
      },
      disabled: {
        true: "cursor-not-allowed bg-zinc-300 hover:border-zinc-300",
      },
    },
    defaultVariants: {
      isError: false,
      disabled: false,
    },
  }
);

const TextField: FC<ITextField> = ({ errorMessage, label, ...props }) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        {...props}
        className={classFusion(
          textFieldStyle({ isError: !!errorMessage, disabled: props.disabled }),
          props.className
        )}
      />
      {!!errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextField;
