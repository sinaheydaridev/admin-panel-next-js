import { ProfileThemeMode } from "constants/enums";
import { useState } from "react";

const useActions = () => {
  const [theme, setTheme] = useState(ProfileThemeMode.grey);

  return { theme, setTheme };
};

export default useActions;
