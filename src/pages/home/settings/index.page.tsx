import { useRef } from "react";
// components
import { SectionRow, Tabs } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
import SettingsAccountTabContent from "./components/account";
import AccountPreferencesContent from "./components/prefrences";
import SettingsNotificationsTabContent from "./components/notifications";
// locals
import texts from "./texts";

const Page = () => {
  const tabContentRef = useRef<HTMLDivElement>(null);

  const renderSettingsAccountTabContent = () => {
    return <SettingsAccountTabContent />;
  };

  const renderSettingsPreferencesTabContent = () => {
    return <AccountPreferencesContent />;
  };

  const renderSettingsNotificationsTabContent = () => {
    return <SettingsNotificationsTabContent />;
  };

  return (
    <PageSection pageTitle={texts.settings} titleText={texts.settings}>
      <Tabs
        tabList={texts.tabs}
        tabPanelList={[
          renderSettingsAccountTabContent(),
          renderSettingsPreferencesTabContent(),
          renderSettingsNotificationsTabContent(),
        ]}
        ref={tabContentRef}
      />
      <div ref={tabContentRef}></div>
    </PageSection>
  );
};

export default Page;
