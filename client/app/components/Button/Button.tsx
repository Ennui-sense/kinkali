import type { ReactNode } from "react";
import "./Button.scss";
import clsx from "clsx";

interface IButton {
  className?: string;
  children: ReactNode;
  size?: "small" | "large";
  variant?: "transparent";
}

const Button = ({ className, children, size, variant }: IButton) => {
  return (
    <button
      className={clsx(
        "button",
        className,
        size && `button--${size}`,
        variant && `button--${variant}`,
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
