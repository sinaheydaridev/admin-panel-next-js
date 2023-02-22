import { FC } from "react";
// locals
import useActions from "./useActions";

interface IMenu {
  children: React.ReactNode;
}

const Menu: FC<IMenu> = ({ children }) => {
  const { ref, isOpen, handleSetOpen } = useActions();

  return (
    <div ref={ref}>
      <button onClick={handleSetOpen}>Open</button>
      {isOpen && (
        <div style={{ display: isOpen ? "hidden" : "block" }}>{children}</div>
      )}
    </div>
  );
};

export default Menu;
