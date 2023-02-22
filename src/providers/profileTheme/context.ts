import { createContext } from "react";
// constants
import { ProfileThemeMode } from "constants/enums";

interface IProfileThemeProvider {
  theme: ProfileThemeMode;
  setTheme: (theme: ProfileThemeMode) => void;
}

const ProfileThemeContext = createContext<IProfileThemeProvider>({
  theme: ProfileThemeMode.pink,
  setTheme: (theme) => {},
});

export default ProfileThemeContext;
