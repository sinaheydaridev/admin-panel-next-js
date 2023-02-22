import { FC } from "react";
import classNames from "classnames";

type ISkeleton = {
  className?: string;
  isAnimation?: boolean;
};

const Skeleton: FC<ISkeleton> = ({ className, isAnimation = true }) => {
  const rootClasses = classNames("skeleton", "skeleton-theme", className, {
    animation: isAnimation,
  });
  return <div className={rootClasses}></div>;
};

export default Skeleton;
