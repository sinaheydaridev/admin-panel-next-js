import React, { FC } from "react";
import classNames from "classnames";

interface ITouch {
  children?: React.ReactNode;
  className?: string;
  isRounded?: boolean;
  onClick?: () => void;
}

const Touch: FC<ITouch> = ({
  children,
  className,
  isRounded = false,
  onClick,
}) => {
  const rootClasses = classNames("touch rounded py-2 px-2", className, {
    "rounded-circle": isRounded,
  });

  return (
    <div className={rootClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Touch;
