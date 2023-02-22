import { FC } from "react";
import { Pencil } from "react-ionicons";
// components
import { EditButton } from "components/common";

interface IText {
  title: string;
  description: string;
}

const Text: FC<IText> = ({ title, description }) => {
  return (
    <div className="py-3 px-2">
      <h5 className="mb-3">{title}</h5>
      <h6>{description}</h6>
      <EditButton className="mt-3" icon={<Pencil />}>
        ویرایش بلاک
      </EditButton>
    </div>
  );
};

export default Text;
