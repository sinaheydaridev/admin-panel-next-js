// components
import { Card, FlexBox, SectionRow, Switch } from "components/common";
// locals
import texts from "./texts";

const SettingsNotificationsTabContent = () => {
  return (
    <>
      <SectionRow header={{ title: texts.emails, subtitle: texts.emails_des }}>
        <div className="mb-4">
          <h6 className="bold">{texts.as_community_member}</h6>
          <FlexBox className="mt-3" justifyContent="space-between">
            <div>{texts.announcements}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
        </div>
        <div className="mb-5 border-bottoms">
          <h6 className="bold">{texts.as_event_guest}</h6>
          <FlexBox
            className="mt-3 border-bottom-grey pb-2"
            justifyContent="space-between"
          >
            <div>{texts.reminders}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
          <FlexBox
            className="mt-3 border-bottom-grey pb-2"
            justifyContent="space-between"
          >
            <div>{texts.new_sessions}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
          <FlexBox
            className="mt-3 border-bottom-grey pb-2"
            justifyContent="space-between"
          >
            <div>{texts.host_message}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
          <FlexBox className="mt-3" justifyContent="space-between">
            <div>{texts.feedback_requests}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
        </div>
        <div className="mb-5">
          <h6 className="bold">{texts.as_event_host}</h6>
          <FlexBox
            className="mt-3 border-bottom-grey pb-2"
            justifyContent="space-between"
          >
            <div>{texts.feedback_responses}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
          <FlexBox
            className="mt-3 border-bottom-grey pb-2"
            justifyContent="space-between"
          >
            <div>{texts.new_guest_registered}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
          <FlexBox className="mt-3" justifyContent="space-between">
            <div>{texts.new_follower}</div>
            <Switch onChange={() => {}} />
          </FlexBox>
        </div>
        <div className="mb-5">
          <h5 className="bold">{texts.communities}</h5>
          <h6 className="text-grey">{texts.communities_des}</h6>
          <Card className="mt-3">
            <FlexBox justifyContent="space-between" alignItems="center">
              <div>Test</div>
              <Switch onChange={() => {}} />
            </FlexBox>
          </Card>
        </div>
      </SectionRow>
    </>
  );
};

export default SettingsNotificationsTabContent;
