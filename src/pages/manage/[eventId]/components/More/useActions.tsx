import { useState } from "react";

const useActions = () => {
  const [date, setDate] = useState("");
  return {
    date,
    setDate
  };
};

export default useActions;
