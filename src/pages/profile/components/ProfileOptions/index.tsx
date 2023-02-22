import { Add, ColorPaletteOutline, MenuOutline } from "react-ionicons";
// components
import { FlexBox } from "components/common";
// hooks
import useQuickView from "hooks/useQuickView";
// locals
import texts from "./texts";

const ProfileOptions = () => {
  const { config, setConfig } = useQuickView();

  return (
    <FlexBox justifyContent="center">
      <FlexBox className="text-center profile-options">
        <div
          className="py-2 px-3"
          onClick={() => setConfig({ id: "block", isOpen: true })}
        >
          <Add width="1rem" height="1rem" />
          <span className="me-2">{texts.add_block}</span>
        </div>
        <div
          className="py-2 px-3"
          onClick={() => setConfig({ id: "recorder", isOpen: true })}
        >
          <MenuOutline width="1rem" height="1rem" />
          <span className="me-2">{texts.recorder}</span>
        </div>
        <div
          className="py-2 px-3"
          onClick={() => setConfig({ id: "themes", isOpen: true })}
        >
          <ColorPaletteOutline width="1rem" height="1rem" />
          <span className="me-2">{texts.themes}</span>
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export default ProfileOptions;
