import { VideocamSharp } from "react-ionicons";
// components
import {
  Button,
  Calendar,
  Card,
  CoverPhoto,
  FlexBox,
  Tabs,
  TextField,
} from "components/common";
// locals
import texts from "./texts";
import useActions from "./useActions";

const EventDetail = () => {
  const {
    date,
    requireRegistration,
    requireRegistrationApproval,
    setDate,
    setRequireRegistration,
    setRequireRegistrationApproval,
  } = useActions();

  const renderZoomTab = () => {
    return (
      <div className="mt-4">
        <div className="mb-3">{texts.once_you_link_description}</div>
        <div className="mb-5">
          <Button
            className="create-event-zoom-button"
            color="info"
            variant="contained"
            icon={<VideocamSharp />}
          >
            {texts.link_zoom_account}
          </Button>
        </div>
        <div className="mb-3">
          {texts.or_you_can_enter_the_meeting_information}
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_url}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_id}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_password}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-primary">{texts.when_will_it_happen}</h4>
        </div>
        <div className="mb-3">
          <Calendar
            textFieldClassName="create-event-text-field"
            onChange={(dateString) => setDate(dateString)}
            value={date}
            label={texts.start_time}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-success">{texts.access}</h4>
        </div>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistration((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration}</div>
            <p className="text-grey">
              {texts.require_registration_description}
            </p>
          </div>
        </FlexBox>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistrationApproval((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration_approval}</div>
            <p className="text-grey">
              {texts.require_registration_approval_description}
            </p>
          </div>
        </FlexBox>
        <div className="mt-4">
          <Button color="dark">{texts.create_event}</Button>
        </div>
      </div>
    );
  };

  const renderVirtualTab = () => {
    return (
      <>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_url}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_id}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_password}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-primary">{texts.when_will_it_happen}</h4>
        </div>
        <div className="mb-3">
          <Calendar
            textFieldClassName="create-event-text-field"
            onChange={(dateString) => setDate(dateString)}
            value={date}
            label={texts.start_time}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-success">{texts.access}</h4>
        </div>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistration((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration}</div>
            <p className="text-grey">
              {texts.require_registration_description}
            </p>
          </div>
        </FlexBox>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistrationApproval((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration_approval}</div>
            <p className="text-grey">
              {texts.require_registration_approval_description}
            </p>
          </div>
        </FlexBox>
        <div className="mt-4">
          <Button color="dark">{texts.create_event}</Button>
        </div>
      </>
    );
  };

  const renderInPersonTab = () => {
    return (
      <>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_url}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_id}
          />
        </div>
        <div className="mb-3">
          <TextField
            className="create-event-text-field"
            textLabel={texts.zoom_meeting_password}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-primary">{texts.when_will_it_happen}</h4>
        </div>
        <div className="mb-3">
          <Calendar
            textFieldClassName="create-event-text-field"
            onChange={(dateString) => setDate(dateString)}
            value={date}
            label={texts.start_time}
          />
        </div>
        <div className="mt-5 mb-4">
          <h4 className="text-success">{texts.access}</h4>
        </div>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistration((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration}</div>
            <p className="text-grey">
              {texts.require_registration_description}
            </p>
          </div>
        </FlexBox>
        <FlexBox className="mb-3">
          <input
            className="mt-3"
            type="checkbox"
            disabled={false}
            onChange={() => setRequireRegistrationApproval((prev) => !prev)}
          />
          <div className="me-2">
            <div className="bold">{texts.require_registration_approval}</div>
            <p className="text-grey">
              {texts.require_registration_approval_description}
            </p>
          </div>
        </FlexBox>
        <div className="mt-4">
          <Button color="dark">{texts.create_event}</Button>
        </div>
      </>
    );
  };

  return (
    <section>
      <FlexBox direction="column" alignItems="center">
        <div className="manage-pages-wrapper container">
          <CoverPhoto />
          <div className="mt-3">
            <div className="fs-7">{texts.event_name}</div>
            <input
              className="mt-2 border-bottom-grey event-input"
              value="این نام رویداد هست"
              placeholder={texts.my_cooking_show}
            />
          </div>
        </div>
      </FlexBox>
      <Card className="mt-4 p-3 rounded-0" variant="grey">
        <FlexBox direction="column" alignItems="center">
          <div className="manage-pages-wrapper container">
            <FlexBox>
              <div className="text-info-main mt-1">
                <VideocamSharp />
              </div>
              <h4 className="text-info-main me-2">
                {texts.where_is_the_event_taking_place}
              </h4>
            </FlexBox>
            <Tabs
              className="create-event-tab-card mt-2"
              variant="card"
              tabList={texts.tabList}
              tabPanelList={[
                renderZoomTab(),
                renderInPersonTab(),
                renderVirtualTab(),
              ]}
            />
          </div>
        </FlexBox>
      </Card>
    </section>
  );
};

export default EventDetail;
