import { ReactNode } from "react";

import styles from "./style.module.css";
import clsx from "clsx";

export type TypeButton = "button-1" | "button-2" | "Blue" | "YellowPink";

interface ArtButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: TypeButton;
}

export const Button: React.FC<ArtButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        type && styles.buttonType,
        type && styles[`type${type}`]
      )}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};
