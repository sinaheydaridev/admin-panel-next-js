// components
import { Button, CustomLink, FlexBox } from "components/common";
import { AppRoute } from "constants/enums";
import { HomeOutline } from "react-ionicons";
// locals
import texts from "./texts";

const Page = () => {
  return (
    <FlexBox
      className="page-not-found"
      justifyContent="center"
      alignItems="center"
    >
      <FlexBox direction="column" alignItems="center">
        <h1>404</h1>
        <div className="text-grey">{texts.text}</div>
        <CustomLink href={AppRoute.home}>
          <Button className="mt-5" icon={<HomeOutline />}>
            {texts.return_home}
          </Button>
        </CustomLink>
      </FlexBox>
    </FlexBox>
  );
};

export default Page;
