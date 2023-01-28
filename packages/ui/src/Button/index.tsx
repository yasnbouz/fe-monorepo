import { type VariantProps, cva } from "cva";
import type { HTMLAttributes, SVGProps } from "react";
import { Loading } from "@hu/icons";
import { Icon } from "../Icon/Icon";
const button = cva(
  "rounded-3xl select-none inline-flex items-center align-middle justify-center gap-x-2",
  {
    variants: {
      /** The size of the Button */
      size: {
        normal: "px-8 py-4 text-lg leading-6",
        medium: "px-8 py-[14px] text-base leading-5",
        small: "px-6 py-2 text-sm leading-4",
      },
      /** The variant of the Button */
      variant: {
        primary: [
          "bg-Primary-M_Blue text-Neutral-White",
          "hover:bg-Primary-Navy",
          "focus-visible:bg-Primary-Navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-Neutral-Black",
          "active:bg-Primary-D_Blue active:ring-0",
          "data-[loading=true]:bg-Primary-D_Blue data-[loading=true]:cursor-not-allowed",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue disabled:cursor-not-allowed",
        ],
        secondary: [
          "bg-transparent text-Primary-M_Blue ring-1 ring-inset ring-Primary-M_Blue",
          "hover:bg-Primary-L_Blue",
          "focus-visible:bg-Primary-L_Blue focus-visible:outline-none focus-visible:ring-Neutral-Black",
          "active:bg-Primary-L_Blue active:ring-0",
          "data-[loading=true]:bg-Primary-L_Blue data-[loading=true]:text-Primary-M_Blue data-[loading=true]:ring-0 data-[loading=true]:cursor-not-allowed",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue disabled:ring-0 disabled:cursor-not-allowed",
        ],
        tertiary: [
          "bg-transparent text-Primary-M_Blue",
          "hover:bg-Primary-L_Blue",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-Neutral-Black",
          "active:bg-Primary-Sky active:ring-0",
          "data-[loading=true]:bg-Primary-Sky data-[loading=true]:cursor-not-allowed",
          "disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue disabled:cursor-not-allowed",
        ],
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  /** If true, the button will show a spinner. */
  isLoading?: boolean;
  /** If true, the button will be disabled. */
  isDisabled?: boolean;
  /** If added, the button will show an icon before the button's label. */
  leftIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  /** If added, the button will show an icon after the button's label. */
  rightIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * Button component is used to trigger an action or event, such as submitting a form,
 * opening a Dialog, canceling an action, or performing a delete operation.
 */
export function Button({
  variant = "primary",
  size = "medium",
  isDisabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={button({ size, variant })}
      disabled={isDisabled}
      data-loading={isLoading}
      tabIndex={isDisabled || isLoading ? -1 : 0}
      {...props}
    >
      {leftIcon && !isLoading && (
        <Icon icon={leftIcon} size={size === "normal" ? "md" : "sm"} />
      )}
      {props?.children ?? "Label"}
      {isLoading && (
        <Icon icon={Loading} size={size === "normal" ? "md" : "sm"} />
      )}
      {rightIcon && !isLoading && (
        <Icon icon={rightIcon} size={size === "normal" ? "md" : "sm"} />
      )}
    </button>
  );
}
