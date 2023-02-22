// components
import { Card, FlexBox, Switch } from "components/common";
// locals
import texts from "../../texts";

const Access = () => {
  const renderEventPageDiscoverability = () => {
    return (
      <Card className="py-4 px-3 mt-3" variant="white">
        <div className="row">
          <div className="col-sm-6 ps-4">
            <h5>{texts.via_profile_page}</h5>
            <FlexBox justifyContent="space-between" alignItems="center">
              <h6 className="mt-2">{texts.list_on_your_profile}</h6>
              <Switch onChange={() => {}} />
            </FlexBox>
            <p className="fs-7 text-grey mt-3">
              {texts.this_event_is_listed_des}
            </p>
          </div>
          <div className="col-sm-6 pe-4">
            <h5>{texts.via_community}</h5>
            <FlexBox justifyContent="space-between" alignItems="center">
              <h6 className="mt-2">{texts.list_on_community_calendar}</h6>
              <Switch onChange={() => {}} />
            </FlexBox>
            <p className="fs-7 text-grey mt-3">
              {texts.this_event_is_not_part_of_any_community}
            </p>
          </div>
        </div>
      </Card>
    );
  };
  const renderEventAccess = () => {
    return (
      <Card className="py-4 px-3 mt-5" variant="white">
        <div className="row">
          <div className="col-sm-6 ps-4">
            <h5>{texts.registration}</h5>
            <FlexBox justifyContent="space-between" alignItems="center">
              <h6 className="mt-2">{texts.accept_registration}</h6>
              <Switch onChange={() => {}} />
            </FlexBox>
            <p className="fs-7 text-grey mt-3">
              {texts.currently_accepting_registrations_des}
            </p>
          </div>
          <div className="col-sm-6 pe-4">
            <h5>{texts.event_capacity}</h5>
            <FlexBox justifyContent="space-between" alignItems="center">
              <h6 className="mt-2">{texts.enforce_max_capacity}</h6>
              <Switch onChange={() => {}} />
            </FlexBox>
            <p className="fs-7 text-grey mt-3">
              {texts.this_event_can_be_registered_des}
            </p>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Card className="py-4">
      <div className="manage-pages-wrapper container">
        <h5>{texts.event_page_discoverability}</h5>
        <h6 className="text-grey">{texts.where_can_people_find_this_event}</h6>
        {renderEventPageDiscoverability()}
        {renderEventAccess()}
      </div>
    </Card>
  );
};

export default Access;
