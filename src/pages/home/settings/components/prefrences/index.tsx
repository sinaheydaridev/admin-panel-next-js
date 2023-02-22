import { FC } from "react";
// components
import {
  Button,
  CheckboxLabel,
  FlexBox,
  SectionRow,
  TextField,
} from "components/common";
// local
import texts from "./texts";
import { Location } from "react-ionicons";
import SwitchTheme from "components/switchTheme/dashboard";

interface IAccountPreferencesContent {}

const AccountPreferencesContent: FC<IAccountPreferencesContent> = () => {
  const t = () => {
    return <div>ocn</div>;
  };
  return (
    <>
      <SectionRow
        className="border-bottom-grey pb-3"
        header={{ title: texts.location, subtitle: texts.location_des }}
        customContentMarginClasses="mt-0"
      >
        <div className="col-md-5 mt-3">
          <TextField
            textLabel="مکان"
            value="تهران"
            icon={
              <div className="text-grey">
                <Location />
              </div>
            }
            fullWidth
          />
        </div>
        <p className="text-grey mt-2">{texts.timezone_des}</p>
      </SectionRow>
      <SectionRow
        className="border-bottom-grey pb-3"
        header={{ title: texts.event_option }}
        customContentMarginClasses="mt-0"
      >
        <CheckboxLabel
          className="mb-3"
          title={texts.default_events_to_unlisted}
          subTitle={texts.default_events_des}
        />
        <CheckboxLabel
          className="mb-3"
          title={texts.send_post_event_feedback_email}
          subTitle={texts.send_guest_des}
        />
        <CheckboxLabel
          className="mb-3"
          title={texts.enable_donations}
          subTitle={texts.allow_guest_des}
        />
        <Button className="mt-2" color="dark">
          {texts.save_event_options}
        </Button>
      </SectionRow>
      <SectionRow
        className="border-bottom-grey pb-3"
        header={{ title: texts.display_options }}
        customContentMarginClasses="mt-0"
      >
        <SwitchTheme />
      </SectionRow>
    </>
  );
};

export default AccountPreferencesContent;
