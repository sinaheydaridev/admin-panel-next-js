import { useContext } from "react";
import ProfileThemeContext from "providers/profileTheme/context";

const useProfileTheme = () => useContext(ProfileThemeContext);

export default useProfileTheme;
