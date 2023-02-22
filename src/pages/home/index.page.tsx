import { Add } from "react-ionicons";
// components
import {
  Button,
  FlexBox,
  Glance,
  QuickAction,
  SectionRow,
} from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
// constants
import globalTexts from "constants/globalTexts";
// locals
import texts from "./texts";
import { AppRoute } from "constants/enums";

const Page = () => {
  const renderTitle = () => {
    return (
      <FlexBox className="border-bottom-grey w-100" alignItems="center">
        <h1 className="text-grey">{globalTexts.hello}</h1>
        <h2 className="me-2">سینا</h2>
      </FlexBox>
    );
  };

  const renderCommunities = () => {
    return (
      <SectionRow
        header={{
          title: texts.communities,
          leftElement: (
            <Button color="grey" icon={<Add />}>
              {globalTexts.create}
            </Button>
          ),
        }}
      >
        <FlexBox
          className="mt-2 border-bottom-grey pb-4"
          alignItems="center"
          direction="column"
        >
          <h5 className="bold">{texts.no_communities}</h5>
          <h6 className="text-grey mt-2">{texts.no_communities_description}</h6>
        </FlexBox>
      </SectionRow>
    );
  };

  const renderQuickActions = () => {
    return (
      <SectionRow
        header={{
          title: texts.quick_actions,
        }}
      >
        <div className="row border-bottom-grey pb-4">
          <div className="col-md-6 mb-3">
            <QuickAction title={texts.view_my_profile} />
          </div>
          <div className="col-md-6 mb-3">
            <QuickAction title={texts.create_new_event} />
          </div>
          <div className="col-md-6 mb-3">
            <QuickAction title={texts.send_newsletter} />
          </div>
          <div className="col-md-6 mb-3">
            <QuickAction title={texts.sell_credit_packs} />
          </div>
        </div>
      </SectionRow>
    );
  };

  const renderAtAGlance = () => {
    return (
      <SectionRow
        header={{
          title: texts.at_a_glance,
          leftText: texts.last_mount,
        }}
      >
        <div className="row border-bottom-grey pb-4">
          <div className="col-md-6 mb-3">
            <Glance
              title={texts.view_my_profile}
              subTitleValue={12}
              stat={44}
              chartColor="warning"
              href={AppRoute.insights}
            />
          </div>
          <div className="col-md-6 mb-3">
            <Glance
              title={texts.audience}
              subTitleValue={12}
              stat={44}
              chartColor="primary"
            />
          </div>
          <div className="col-md-6 mb-3">
            <Glance
              title={texts.event_guests}
              subTitleValue={null}
              stat={null}
              chartColor="info"
            />
          </div>
        </div>
      </SectionRow>
    );
  };

  return (
    <PageSection pageTitle={texts.dashboard} titleElement={renderTitle()}>
      {renderCommunities()}
      {renderQuickActions()}
      {renderAtAGlance()}
    </PageSection>
  );
};

export default Page;
