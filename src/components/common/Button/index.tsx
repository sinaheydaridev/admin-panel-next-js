import { FC } from "react";
import classnames from "classnames";
import { ClipLoader } from "react-spinners";
// components
import FlexBox from "../FlexBox";
import Link from "next/link";

export interface IButton {
  children: React.ReactNode;
  className?: string;
  variant?: "contained" | "outlined" | "none";
  color?: "primary" | "grey" | "dark" | "warning" | "info";
  fullWidth?: boolean;
  type?: "submit" | "button";
  disabled?: boolean;
  icon?: React.ReactNode;
  spinner?: boolean;
  href?: string;
  isLink?: boolean;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  type = "button",
  disabled = false,
  spinner = false,
  icon,
  href = "/",
  isLink = false,
  onClick = () => {},
}) => {
  const rootClasses = classnames("button", className, {
    "primary-contained": variant === "contained" && color === "primary",
    "grey-contained": variant === "contained" && color === "grey",
    "dark-contained": variant === "contained" && color === "dark",
    "warning-contained": variant === "contained" && color === "warning",
    "info-contained": variant === "contained" && color === "info",
    "primary-outlined": variant === "outlined" && color === "primary",
    "grey-outlined": variant === "outlined" && color === "grey",
    "dark-outlined": variant === "outlined" && color === "dark",
    "dark-none": variant === "none" && color === "dark",
    "w-100": fullWidth,
    "bg-grey-0 cursor-not-allow": disabled || spinner,
  });

  if (isLink) {
    return (
      <Link href={href}>
        <a className={rootClasses}>
          {icon && <span className="mb-1 ms-1">{icon}</span>}
          <span>{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <button
      className={rootClasses}
      type={type}
      disabled={disabled || spinner}
      onClick={onClick}
    >
      <FlexBox alignItems="center" justifyContent="center">
        {!spinner && (
          <div className="h-100">
            {icon && <span className="mb-1 ms-1">{icon}</span>}
            <span>{children}</span>
          </div>
        )}
        {spinner && <ClipLoader color="white" loading={true} size={20} />}
      </FlexBox>
    </button>
  );
};

export default Button;
