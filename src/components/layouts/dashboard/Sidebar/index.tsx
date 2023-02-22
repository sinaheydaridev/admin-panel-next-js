// components
import { Card, CustomLink, FlexBox, Touch } from "components/common";
import Navbar from "../Navbar";
import { UserControl } from "components/user";
// constants
import { AppRoute } from "constants/enums";

const SideDrawer = () => {
  return (
    <Card className="sidebar desktop position-sticky top-0 bottom-0 h-100 vh-100 rounded-0 col-lg-3 col-md-1 px-0 py-3 m-0">
      <div className="main-nav border-bottom-grey">
        <Navbar />
      </div>
      <div className="p-2 mb-2 w-100">
        <FlexBox justifyContent="end">
          <UserControl />
        </FlexBox>
        <CustomLink href={AppRoute.logout}>
          <FlexBox>
            <Touch>خروج</Touch>
          </FlexBox>
        </CustomLink>
      </div>
    </Card>
  );
};

export default SideDrawer;
