// components
import {
  Avatar,
  Button,
  Card,
  FlexBox,
  Tabs,
  TextField,
} from "components/common";
// constants
import globalTexts from "constants/globalTexts";
// locals
import texts from "../../../../texts";
import {
  LogoFacebook,
  LogoLinkedin,
  LogoTwitter,
  Pencil,
} from "react-ionicons";

const GuestEventCard = () => {
  const renderEmailTab = () => {
    return (
      <div className="col-md-12">
        <TextField
          helperText="جای گذاری کنید از Excel یا Google Sheets."
          placeholder="ایمیل را وارد کنید"
          fullWidth
        />
        <FlexBox className="mt-3" alignItems="center">
          <input type="checkbox" />
          <div className="me-2">{texts.add_a_personalized_message}</div>
        </FlexBox>
        <TextField
          className="mt-3"
          rows={3}
          placeholder=""
          multiline
          fullWidth
        />
        <Button color="dark">{globalTexts.send_invites}</Button>
      </div>
    );
  };
  const renderEventsTab = () => {
    return (
      <div className="col-md-12">
        <TextField
          helperText="جای گذاری کنید از Excel یا Google Sheets."
          placeholder="ایمیل را وارد کنید"
          fullWidth
        />
        <FlexBox className="mt-3" alignItems="center">
          <input type="checkbox" />
          <div className="me-2">{texts.add_a_personalized_message}</div>
        </FlexBox>
        <TextField
          className="mt-3"
          rows={3}
          placeholder=""
          multiline
          fullWidth
        />
        <Button color="dark">{globalTexts.send_invites}</Button>
      </div>
    );
  };
  const renderCvcTab = () => {
    return (
      <div className="col-md-12">
        <TextField
          helperText="جای گذاری کنید از Excel یا Google Sheets."
          placeholder="ایمیل را وارد کنید"
          fullWidth
        />
        <FlexBox className="mt-3" alignItems="center">
          <input type="checkbox" />
          <div className="me-2">{texts.add_a_personalized_message}</div>
        </FlexBox>
        <TextField
          className="mt-3"
          rows={3}
          placeholder=""
          multiline
          fullWidth
        />
        <Button color="dark">{globalTexts.send_invites}</Button>
      </div>
    );
  };
  const renderTagsTab = () => {
    return (
      <div className="col-md-12">
        <TextField
          helperText="جای گذاری کنید از Excel یا Google Sheets."
          placeholder="ایمیل را وارد کنید"
          fullWidth
        />
        <FlexBox className="mt-3" alignItems="center">
          <input type="checkbox" />
          <div className="me-2">{texts.add_a_personalized_message}</div>
        </FlexBox>
        <TextField
          className="mt-3"
          rows={3}
          placeholder=""
          multiline
          fullWidth
        />
        <Button color="dark">{globalTexts.send_invites}</Button>
      </div>
    );
  };
  return (
    <Card className="p-3 mt-3" variant="white">
      <h6>{texts.invite_guests}</h6>
      <div className="row">
        <div className="col-lg-8 mb-4">
          <Tabs
            className="mt-3"
            tabList={texts.invite_tab}
            tabPanelList={[
              renderEmailTab(),
              renderEventsTab(),
              renderCvcTab(),
              renderTagsTab(),
            ]}
            variant="card"
          />
        </div>
        <div className="col-lg-4">
          <h6>{texts.share_event_link}</h6>
          <div className="fs-7 text-grey border-bottom-grey pb-2">
            lu.ma/k15dfq30
          </div>
          <FlexBox className="mt-2">
            <div className="text-grey ms-2">
              <LogoTwitter />
            </div>
            <div className="text-grey ms-2">
              <LogoFacebook />
            </div>
            <div className="text-grey ms-2">
              <LogoLinkedin />
            </div>
          </FlexBox>
        </div>
      </div>
    </Card>
  );
};

export default GuestEventCard;
