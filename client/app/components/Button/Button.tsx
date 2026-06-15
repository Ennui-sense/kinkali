import type { ReactNode } from "react";
import "./Button.scss";
import clsx from "clsx";

interface IButton {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children }: IButton) => {
  return (
    <button className={clsx("button", className)} type="button">
      {children}
    </button>
  );
};

export default Button;
