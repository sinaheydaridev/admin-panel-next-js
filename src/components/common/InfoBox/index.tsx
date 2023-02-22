import { FC } from "react";
import useActions from "./useActions";

interface IInfoBox {
  children: React.ReactNode;
  onClickOutSide: () => void;
  isOpen: boolean;
}

const InfoBox: FC<IInfoBox> = ({ children, onClickOutSide, isOpen }) => {
  const { ref } = useActions({ onClickOutSide });

  if (!isOpen) return null;

  return <div ref={ref}>{children}</div>;
};

export default InfoBox;
