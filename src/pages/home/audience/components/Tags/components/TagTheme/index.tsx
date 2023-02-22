// constants
import { ProfileThemeMode } from "constants/enums";
// locals
import useActions from "./useActions";
import texts from "./texts";
import { FlexBox } from "components/common";

const TagTheme = () => {
  const { theme, setTheme } = useActions();

  return (
    <FlexBox
      className="switch-theme"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className="mb-3">{texts.pick_a_color}</div>
      <FlexBox>
        <div
          className={`color bg-primary ${
            theme === ProfileThemeMode.pink ? "active" : ""
          } ms-2`}
          onClick={() => setTheme(ProfileThemeMode.pink)}
        ></div>
        <div
          className={`color bg-success ${
            theme === ProfileThemeMode.success ? "active" : ""
          } ms-2`}
          onClick={() => setTheme(ProfileThemeMode.success)}
        ></div>
        <div
          className={`color bg-gold ${
            theme === ProfileThemeMode.gold ? "active" : ""
          } ms-2`}
          onClick={() => setTheme(ProfileThemeMode.gold)}
        ></div>
        <div
          className={`color bg-grey ${
            theme === ProfileThemeMode.grey ? "active" : ""
          } ms-2`}
          onClick={() => setTheme(ProfileThemeMode.grey)}
        ></div>
      </FlexBox>
    </FlexBox>
  );
};

export default TagTheme;
