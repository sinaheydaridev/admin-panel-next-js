import { Tabs } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
import Overview from "./components/Overview";
import Tags from "./components/Tags";
import Unsubscribes from "./components/Unsubscribes";
// local
import texts from "./texts";

const Page = () => {
  const renderOverViewTab = () => {
    return <Overview />;
  };
  const renderTagsTab = () => {
    return <Tags />;
  };
  const renderUnsubscribes = () => {
    return <Unsubscribes />
  };

  return (
    <PageSection pageTitle={texts.audience} titleText={texts.audience}>
      <Tabs
        tabList={texts.tabs}
        tabPanelList={[
          renderOverViewTab(),
          renderTagsTab(),
          renderUnsubscribes(),
        ]}
      />
    </PageSection>
  );
};

export default Page;
