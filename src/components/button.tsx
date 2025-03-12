import classFusion from "@/utils/class-fusion";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const buttonStyle = cva(
  "uppercase box-border inline-flex w-max cursor-pointer items-center justify-center rounded font-bold transition-colors focus-visible:outline-none h-[38px] gap-2 px-5 text-sm",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed !border-gray-800 !bg-zinc-300 !text-zinc-500",
      },
      variant: {
        default:
          "bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700",
        outline:
          "border text-violet-500 border-violet-500 hover:border-violet-600 active:border-violet-700",
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  }
);

const Button: FC<IButton> = ({ variant, ...props }) => {
  return (
    <button
      {...props}
      className={classFusion(
        buttonStyle({ disabled: props.disabled, variant: variant }),
        props.className
      )}
    />
  );
};

export default Button;
