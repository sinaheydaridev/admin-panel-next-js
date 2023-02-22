// components
import { Button, CustomLink, FlexBox } from "components/common";
// constants
import { AppRoute } from "constants/enums";
// locals
import texts from "./texts";

const Header = () => {
  return (
    <header className="container p-3">
      <FlexBox justifyContent="space-between">
        <div>
          <Button color="grey">Basir</Button>
        </div>
        <div>
          <nav>
            <ul className="d-flex list-none text-grey">
              <li className="ms-4">
                <CustomLink href={AppRoute.events}>{texts.events}</CustomLink>
              </li>
              <li className="ms-4">
                <CustomLink href={AppRoute.communities}>
                  {texts.communities}
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
        <CustomLink href={AppRoute.home}>logo</CustomLink>
      </FlexBox>
    </header>
  );
};

export default Header;
