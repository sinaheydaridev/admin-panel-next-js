import classNames from "classnames";
// constants
import { Card } from "components/common";
import { AppThemeMode } from "constants/enums";
import { MoonOutline, SunnyOutline, TvOutline } from "react-ionicons";
// locals
import texts from "./texts";
import useActions from "./useActions";

const SwitchTheme = () => {
  const { theme, mounted, setTheme } = useActions();

  const renderDarkButton = () => {
    return (
      <div
        className={classNames("col-4", {
          active: theme === AppThemeMode.dark,
        })}
        onClick={() => (mounted ? setTheme(AppThemeMode.dark) : null)}
      >
        <div className="w-100 cursor-pointer text-center">
          <MoonOutline width="1rem" height="1.3rem" />
          <button className="btn">{texts.dark}</button>
        </div>
      </div>
    );
  };

  const renderLightButton = () => {
    return (
      <div
        className={classNames("col-4", {
          active: theme === AppThemeMode.light,
        })}
        onClick={() => (mounted ? setTheme(AppThemeMode.light) : null)}
      >
        <div className="w-100 cursor-pointer text-center">
          <SunnyOutline width="1.2rem" height="1.5rem" />
          <button className="btn">{texts.light}</button>
        </div>
      </div>
    );
  };

  const renderSystemButton = () => {
    return (
      <div
        className={classNames("col-4 cursor-pointer text-center", {
          active: theme === AppThemeMode.system,
        })}
        onClick={() => (mounted ? setTheme(AppThemeMode.system) : null)}
      >
        <div className="w-100 text-center">
          <TvOutline width="1.2rem" height="1.5rem" />
          <button className="btn">{texts.system}</button>
        </div>
      </div>
    );
  };

  return (
    <Card variant="grey" className="switch-app-theme py-2 px-3 col-md-5">
      <div className="row">
        {renderLightButton()}
        {renderDarkButton()}
        {renderSystemButton()}
      </div>
    </Card>
  );
};

export default SwitchTheme;
