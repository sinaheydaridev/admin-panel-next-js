import { Menu } from "react-ionicons";
// components
import { Card, FlexBox, Touch } from "components/common";
import MobileTopBar from "../Topbar";
// locals
import useActions from "./useActions";

const MobileHeader = () => {
  const { open, onToggle } = useActions();

  return (
    <>
      <header className="mobile-header mobile">
        <Card className="rounded-0 h-100 w-100">
          <FlexBox className="h-100 w-100" alignItems="center">
            <FlexBox className="container" onClick={onToggle.bind(null, open)}>
              <Touch>
                <Menu />
              </Touch>
            </FlexBox>
          </FlexBox>
        </Card>
      </header>
      <MobileTopBar isOpen={open} />
    </>
  );
};

export default MobileHeader;
