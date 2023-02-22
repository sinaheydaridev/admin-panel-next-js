// components
import { Avatar, CustomLink, FlexBox, Touch } from "components/common";
// constants
import { AppRoute } from "constants/enums";

const UserControl = () => {
  return (
    <CustomLink href={AppRoute.profile + "/uuid"}>
      <Touch>
        <FlexBox className="text-start" alignItems="center">
          <div className="ms-2 label">
            <div className="bold fs-5">Sina</div>
            <div className="fs-7">lu.ma/me</div>
          </div>
          <Avatar
            src="/assets/images/avatar_23.png"
            alt="avatar"
            width={40}
            height={40}
          />
        </FlexBox>
      </Touch>
    </CustomLink>
  );
};

export default UserControl;
