import type { SVGProps } from "react";
import { clsx } from "clsx";

interface IconProps {
  /** The SVG Component  */
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  /** The Size for the icon */
  size?: "sm" | "md";
}
export function Icon({ icon: Icon, size = "md" }: IconProps) {
  let iconClass = clsx(
    "flex-shrink-0",
    size === "md" && "!w-6 !h-6",
    size !== "md" && "!w-4 !h-4"
  );
  return <Icon viewBox="0 0 24 24" className={iconClass} />;
}
