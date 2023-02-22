import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { ArrowUpCircle } from "react-ionicons";

interface IAvatar extends ImageProps {
  isEdit?: boolean;
}

const Avatar: FC<IAvatar> = ({ src, alt, isEdit, ...props }) => {
  const renderAvatar = () => {
    if (isEdit) {
      return (
        <div className="avatar-container hidden mt-2 position-relative">
          <Image
            className="avatar rounded-circle"
            src={src}
            alt={alt}
            {...props}
          />
          <div className="account-avatar-icon cursor-pointer position-absolute bottom-0 mb-2 rounded-circle">
            <ArrowUpCircle width="2.5rem" height="2.5rem" />
          </div>
          <input
            className="avatar-input position-absolute top-0 end-0"
            type="file"
            accept="image/*"
          />
        </div>
      );
    } else {
      return (
        <Image className="rounded-circle" src={src} alt={alt} {...props} />
      );
    }
  };

  return renderAvatar();
};

export default Avatar;
