import { FC } from "react";
// components
import { Button, FlexBox, TextField } from "components/common";
// local
import texts from "./texts";

interface IBlock {
  title: string;
  description: string;
}

const CollectionEmails: FC<IBlock> = ({ title, description }) => {
  return (
    <div className="email-block-content py-3 px-2">
      <div>{title}</div>
      <div className="mt-2">{description}</div>
      <FlexBox className="mt-4" alignItems="center">
        <div className="col-9">
          <TextField placeholder="ایمیل شما" fullWidth />
        </div>
        <Button className="me-2" color="dark">
          {texts.subscribe}
        </Button>
      </FlexBox>
    </div>
  );
};

export default CollectionEmails;
