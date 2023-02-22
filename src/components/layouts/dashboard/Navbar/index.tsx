import classNames from "classnames";
import { useRouter } from "next/router";
import {
  HomeOutline,
  VideocamOutline,
  PeopleOutline,
  MailOutline,
  BarChartOutline,
  SettingsOutline,
} from "react-ionicons";
// components
import { CustomLink, FlexBox, Touch } from "components/common";
// constants
import { AppRoute } from "constants/enums";
// locals
import texts from "../Navbar/texts";

const Navbar = () => {
  const { pathname } = useRouter();
  const appRoute = pathname as AppRoute;

  const renderHome = () => {
    return (
      <CustomLink href={AppRoute.home}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute === AppRoute.home,
          })}
        >
          <FlexBox>
            <div>
              <HomeOutline />
            </div>
            <div className="label me-3">{texts.home}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  const renderEvents = () => {
    return (
      <CustomLink href={AppRoute.events}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute.includes(AppRoute.events),
          })}
        >
          <FlexBox>
            <div>
              <VideocamOutline />
            </div>
            <div className="label me-3">{texts.events}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  const renderAudience = () => {
    return (
      <CustomLink href={AppRoute.audience}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute.includes(AppRoute.audience),
          })}
        >
          <FlexBox>
            <div>
              <PeopleOutline />
            </div>
            <div className="label me-3">{texts.audience}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  const renderNewsletters = () => {
    return (
      <CustomLink href={AppRoute.newsletters}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute.includes(AppRoute.newsletters),
          })}
        >
          <FlexBox>
            <div>
              <MailOutline />
            </div>
            <div className="label me-3">{texts.newsletters}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  const renderInsights = () => {
    return (
      <CustomLink href={AppRoute.insights}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute.includes(AppRoute.insights),
          })}
        >
          <FlexBox>
            <div>
              <BarChartOutline />
            </div>
            <div className="label me-3">{texts.insights}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  const renderSettings = () => {
    return (
      <CustomLink href={AppRoute.settings}>
        <Touch
          className={classNames("fs-5 mb-1", {
            "text-primary": appRoute === AppRoute.settings,
          })}
        >
          <FlexBox>
            <div>
              <SettingsOutline />
            </div>
            <div className="label me-3">{texts.settings}</div>
          </FlexBox>
        </Touch>
      </CustomLink>
    );
  };

  return (
    <>
      {renderHome()}
      {renderEvents()}
      {renderAudience()}
      {renderNewsletters()}
      {renderInsights()}
      {renderSettings()}
    </>
  );
};

export default Navbar;
