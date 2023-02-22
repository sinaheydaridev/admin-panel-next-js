import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const useActions = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return { theme, mounted, setTheme };
};

export default useActions;
