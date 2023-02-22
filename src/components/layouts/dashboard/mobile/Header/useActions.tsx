import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "utils/main";

const useActions = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const onToggle = (current: boolean) => {
    setOpen((prev) => !prev);
    if (!current) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  };

  const handleClose = () => {
    setOpen(false);
    enableBodyScroll();
  };

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return { open, onToggle };
};

export default useActions;
