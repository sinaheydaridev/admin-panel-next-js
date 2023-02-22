import { FC } from "react";
import classNames from "classnames";

interface IBackDrop {
  isOpen?: boolean;
  onClick?: () => void;
}

const Backdrop: FC<IBackDrop> = ({ isOpen = false, onClick }) => {
  const rootClasses = classNames("backdrop", {
    "d-block": isOpen,
  });
  return <div className={rootClasses} onClick={onClick}></div>;
};

export default Backdrop;
