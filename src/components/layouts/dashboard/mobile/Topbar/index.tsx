import { FC } from "react";
import classNames from "classnames";
// components
import { Card, CustomLink, FlexBox, Touch } from "components/common";
import Navbar from "../../Navbar";
import { UserControl } from "components/user";
// constants
import { AppRoute } from "constants/enums";
import globalTexts from "constants/globalTexts";

interface IMobileTopBar {
  isOpen: boolean;
}

const MobileTopBar: FC<IMobileTopBar> = ({ isOpen }) => {
  const classes = classNames(
    "mobile-top-bar mobile position-fixed w-100 rounded-0",
    { open: isOpen }
  );

  return (
    <Card className={classes}>
      <div className="mobile-main-nav border-grey-bottom">
        <Navbar />
      </div>
      <div className="p-2 mb-2 w-100">
        <FlexBox justifyContent="end">
          <UserControl />
        </FlexBox>
        <CustomLink href={AppRoute.logout}>
          <Touch>{globalTexts.logout}</Touch>
        </CustomLink>
      </div>
    </Card>
  );
};

export default MobileTopBar;
