import { FC } from "react";
import { Pencil } from "react-ionicons";
// components
import { Button, EditButton, FlexBox, TextField } from "components/common";
// local
import texts from "./texts";

interface ICollectionEmails {
  title: string;
  description: string;
}

const CollectionEmails: FC<ICollectionEmails> = ({ title, description }) => {
  return (
    <>
      <div className="email-block-content mt-4 py-3 px-2">
        <h5>{title}</h5>
        <div className="mt-3">{description}</div>
        <FlexBox className="mt-4" alignItems="center">
          <div className="col-sm-9 col-8">
            <TextField placeholder="ایمیل شما" fullWidth />
          </div>
          <Button className="me-2" color="dark">
            {texts.subscribe}
          </Button>
        </FlexBox>
      </div>
      <EditButton className="mt-3" icon={<Pencil />}>ویرایش بلاک</EditButton>
    </>
  );
};

export default CollectionEmails;
