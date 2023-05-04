import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center bg-red-900",
  {
    variants: {
      variant: { default: "bg-red-900", outline: "bg-black" },
      size: { default: "h-20 bg-red-500 py-2 px-4", sm: "h-9 px-2 rounded-md" },
      defaultVariants: { variant: "default", size: "default" },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return <button {...props} />;
};

export { Button, buttonVariants };
