import { useState } from "react";

const useActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return { isOpen, handleOpen };
};

export default useActions;
