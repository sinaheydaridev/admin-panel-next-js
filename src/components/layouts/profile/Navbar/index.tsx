import Link from "next/link";
// components
import { FlexBox } from "components/common";
// locals
import texts from "./texts";
import { AppRoute } from "constants/enums";

const ProfileNavbar = () => {
  return (
    <FlexBox className="profile-navbar py-1" alignItems="center">
      <div className="container">
        <Link href={AppRoute.home}>
          <a className="link text-white fs-6 px-2 py-1">{texts.dashboard}</a>
        </Link>
        <Link href={AppRoute.insights}>
          <a className="link text-white fs-6 px-2 py-1">
            {texts.daily_views}: 3
          </a>
        </Link>
      </div>
    </FlexBox>
  );
};

export default ProfileNavbar;
