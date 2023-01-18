import { type VariantProps, cva } from "cva";
import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

const button = cva(
  "rounded-3xl select-none inline-flex items-center justify-center gap-x-2",
  {
    variants: {
      size: {
        normal: "px-8 py-4 text-lg leading-6",
        medium: "px-8 py-[14px] text-base leading-5",
        small: "px-6 py-2 text-sm leading-4",
      },
      level: {
        primary: [
          "bg-Primary-M_Blue text-Neutral-White",
          "hover:bg-Primary-Navy",
          "focus-visible:bg-Primary-Navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-Neutral-Black",
          "active:bg-Primary-D_Blue active:ring-0",
          "data-[loading=true]:bg-Primary-D_Blue data-[loading=true]:cursor-default",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue",
        ],
        secondary: [
          "bg-Neutral-White text-Primary-M_Blue ring-1 ring-inset ring-Primary-M_Blue",
          "hover:bg-Primary-L_Blue",
          "focus-visible:bg-Primary-L_Blue focus-visible:outline-none focus-visible:ring-Neutral-Black",
          "active:ring-0",
          "data-[loading=true]:bg-Primary-L_Blue data-[loading=true]:text-Primary-M_Blue data-[loading=true]:ring-0 data-[loading=true]:cursor-default",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue disabled:ring-0",
        ],
        tertiary: [
          "bg-Neutral-White text-Primary-M_Blue",
          "hover:bg-Primary-L_Blue",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-Neutral-Black",
          "active:bg-Primary-Sky active:ring-0",
          "data-[loading=true]:bg-Primary-Sky data-[loading=true]:cursor-default",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue",
        ],
      },
    },
    defaultVariants: {
      size: "medium",
      level: "primary",
    },
  }
);
interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
  disabled?: boolean;
}
export function Button({
  level,
  size,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={button({ size, level })}
      disabled={disabled}
      data-loading={isLoading}
      tabIndex={disabled || isLoading ? -1 : 0}
      {...props}
    >
      {props?.children ?? "Label"}
      {isLoading && (
        <span
          className={clsx(
            "flex justify-center items-center align-middle",
            size === "normal" && "w-6 h-6",
            size !== "normal" && "w-4 h-4"
          )}
        >
          <LoadingIcon />
        </span>
      )}
    </button>
  );
}
function LoadingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 1v3M11 18v3M21 11h-3M4 11H1M18.071 3.929 15.95 6.05M6.05 15.95l-2.121 2.121M3.929 3.929 6.05 6.05M15.95 15.95l2.12 2.121"
      />
    </svg>
  );
}
