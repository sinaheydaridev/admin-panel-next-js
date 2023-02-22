import { Add } from "react-ionicons";
// components
import { Button, FlexBox, Tabs } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
// locals
import texts from "./texts";
import { AppRoute } from "constants/enums";
import Past from "./components/Past";

const Page = () => {
  const renderTitle = () => {
    return (
      <FlexBox
        className="w-100"
        alignItems="center"
        justifyContent="space-between"
      >
        <h2>{texts.events}</h2>
        <Button variant="outlined" color="primary" icon={<Add />}>
          {texts.create_event}
        </Button>
      </FlexBox>
    );
  };

  const renderUpcomingTab = () => {
    return (
      <FlexBox
        className="mt-5"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h5>{texts.host_events_with_luma}</h5>
        <p className="fs-7 text-grey text-center">
          {texts.beautiful_event_pages_description}
        </p>
        <Button href={AppRoute.createEvent} isLink>
          {texts.create_new_event}
        </Button>
      </FlexBox>
    );
  };

  const renderPastTab = () => {
    return [1, 2, 3].map((item) => <Past key={item} to="/manage/event/sjkasjak" />);
  };

  return (
    <PageSection pageTitle={texts.events} titleElement={renderTitle()}>
      <Tabs
        tabList={[texts.upcoming, texts.past]}
        tabPanelList={[renderUpcomingTab(), renderPastTab()]}
      />
    </PageSection>
  );
};

export default Page;
