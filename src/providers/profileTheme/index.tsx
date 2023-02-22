import { FC, useEffect, useState } from "react";
import { ProfileThemeMode } from "constants/enums";
import ProfileThemeContext from "./context";

const ProfileThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ProfileThemeMode.pink);

  const handleSetTheme = (theme: ProfileThemeMode) => {
    localStorage.setItem("profile-theme", theme);
    document.body.setAttribute("data-profile-theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    setTheme(
      (localStorage.getItem("profile-theme") as ProfileThemeMode) ||
        ProfileThemeMode.pink
    );
  }, []);

  return (
    <ProfileThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </ProfileThemeContext.Provider>
  );
};

export default ProfileThemeProvider;
