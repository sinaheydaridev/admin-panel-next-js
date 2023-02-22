import { LogoTwitter, MailOutline } from "react-ionicons";
// components
import { CustomLink, FlexBox } from "components/common";

const Footer = () => {
  return (
    <div className="container text-grey border-top-grey py-4">
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            رویداد
          </CustomLink>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            لینک
          </CustomLink>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            رویداد
          </CustomLink>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            لینک
          </CustomLink>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            رویداد
          </CustomLink>
          <CustomLink href="#" className="ms-3 text-hover-primary">
            لینک
          </CustomLink>
        </FlexBox>
        <div>
          <LogoTwitter cssClasses="ms-2" />
          <MailOutline />
        </div>
      </FlexBox>
    </div>
  );
};

export default Footer;
