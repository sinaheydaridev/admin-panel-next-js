import { FC } from "react";
import { ArrowUpCircle } from "react-ionicons";
// components
import { Avatar, Button, SectionRow, TextField } from "components/common";
// local
import texts from "./texts";

interface IAccountTabContent {}

const SettingsAccountTabContent: FC<IAccountTabContent> = () => {
  return (
    <>
      <SectionRow
        className="border-bottom-grey pb-3"
        header={{ title: texts.profile }}
        customContentMarginClasses="mt-0"
      >
        <div className="text-grey">{texts.profile_picture}</div>
        <Avatar src="/assets/images/avatar_23.png" width={100} height={100} alt="" isEdit />
        <div className="mt-3">
          <div className="mb-3 col-md-5">
            <TextField textLabel="نام" value="basir" fullWidth />
          </div>
          <div className="mb-3 col-md-5">
            <TextField textLabel="نام کاربری" placeholder="" fullWidth />
          </div>
          <div className="mt-4">
            <Button color="dark">{texts.save_change}</Button>
            <p className="text-grey mt-2">{texts.changes_description}</p>
          </div>
        </div>
      </SectionRow>
      <SectionRow
        className="border-bottom-grey pb-3"
        header={{
          title: texts.email_and_phone,
          subtitle: texts.manege_description,
        }}
        customContentMarginClasses="mt-0"
      >
        <div className="mt-3">
          <div className="col-md-5 mb-2">
            <TextField textLabel="ایمیل" placeholder="" fullWidth />
          </div>
          <div className="col-md-5 mb-2">
            <TextField
              textLabel="شماره موبایل"
              placeholder=""
              type="number"
              fullWidth
            />
          </div>
          <p className="text-grey">{texts.email_and_phone_description}</p>
        </div>
      </SectionRow>
      <SectionRow
        className="border-bottom-grey pb-4"
        header={{
          title: texts.password,
          subtitle: texts.password_description,
        }}
        customContentMarginClasses="mt-0"
      >
        <div className="mt-2">
          <Button color="dark">{texts.set_a_password}</Button>
        </div>
      </SectionRow>
      <SectionRow
        className="border-bottom-grey pb-4"
        header={{
          title: texts.delete_account,
          subtitle: texts.delete_account_description,
        }}
        customContentMarginClasses="mt-0"
      >
        <div className="mt-2">
          <Button color="primary" variant="outlined">
            {texts.delete_account}
          </Button>
        </div>
      </SectionRow>
    </>
  );
};

export default SettingsAccountTabContent;
