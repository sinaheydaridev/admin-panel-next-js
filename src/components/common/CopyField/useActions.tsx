import { useState } from "react";

const useActions = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  return {
    value,
    copied,
    setValue,
    setCopied,
  };
};

export default useActions;
