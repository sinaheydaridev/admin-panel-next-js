import { ImageOutline } from "react-ionicons";
// components
import Button from "../Button";
// locals
import texts from "./texts";

const CoverPhoto = () => {
  return (
    <div className="cover-photo position-relative rounded">
      <div className="position-absolute bottom-0 mb-2 me-2">
        <Button color="grey" icon={<ImageOutline />}>
          {texts.change_cover_photo}
        </Button>
      </div>
    </div>
  );
};

export default CoverPhoto;
