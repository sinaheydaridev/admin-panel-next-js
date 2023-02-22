import { FC } from "react";
import classnames from "classnames";
// components
import FlexBox from "../FlexBox";

export interface IEditButton {
  children: React.ReactNode;
  className?: string;
  color?: "pink" | "warning" | "gold" | "success" | "secondary" | "grey";
  fullWidth?: boolean;
  type?: "submit" | "button";
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const EditButton: FC<IEditButton> = ({
  children,
  className,
  color = "pink",
  fullWidth = false,
  type = "button",
  disabled = false,
  icon,
  onClick = () => {},
}) => {
  const rootClasses = classnames("edit-button", className, {
    pink: color === "pink",
    "w-100": fullWidth,
    "bg-grey-0 cursor-not-allow": disabled,
  });

  return (
    <button
      className={rootClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <FlexBox alignItems="center" justifyContent="center">
        <div className="h-100">
          {icon && <span className="mb-1 ms-1">{icon}</span>}
          <span>{children}</span>
        </div>
      </FlexBox>
    </button>
  );
};

export default EditButton;
