import cx from "./Button.module.css";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  variant?: "primary" | "seconday";
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={[cx["btn"], cx[variant]].join(" ")} {...props}>
      {children || "Button"}
    </button>
  );
}
