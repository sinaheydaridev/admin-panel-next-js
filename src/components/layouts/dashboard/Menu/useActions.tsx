import { useEffect, useRef, useState } from "react";

const useActions = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSetClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleSetClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, isOpen, handleSetOpen };
};

export default useActions;
