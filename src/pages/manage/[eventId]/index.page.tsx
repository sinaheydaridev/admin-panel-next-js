import { useRef } from "react";
// components
import { FlexBox, Tabs } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
import GuestsEvent from "./components/GuestsEvent";
import Access from "./components/Access";
import Emails from "./components/Emails";
import Insights from "./components/Insights";
import More from "./components/More";
import CopyField from "components/common/CopyField";
// utils
import { dateObject } from "utils/date";
import EventDetail from "./components/EventDetail";
// locals
import texts from "./texts";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  // =============================================================
  // =======================> Header Tab <========================
  // =============================================================

  const renderGuestTabHeader = () => {
    return <GuestsEvent />;
  };

  const renderDetailsTabHeader = () => {
    return <EventDetail />;
  };

  const renderAccessTabHeader = () => {
    return <Access />;
  };

  const renderEmailTabHeader = () => {
    return <Emails />;
  };

  const renderInsightsTabHeader = () => {
    return <Insights />;
  };

  const renderMoreTabHeader = () => {
    return <More />;
  };

  return (
    <PageSection pageTitle="مدیریت رویداد">
      <div className="manage-pages-wrapper container">
        <FlexBox justifyContent="space-between" alignItems="center">
          <div>
            <h3>نام رویداد</h3>
            <h6 className="text-grey">{dateObject.localFormat()}</h6>
          </div>
          <div>
            <div>
              <span className="text-grey fs-7">
                پیوند رویداد قابل اشتراک گذاری
              </span>
              <CopyField value="lu.ma/ro3t3n5sasasaw" />
            </div>
          </div>
        </FlexBox>
        <Tabs
          className="mt-5"
          tabList={texts.header_tab}
          tabPanelList={[
            renderGuestTabHeader(),
            renderDetailsTabHeader(),
            renderAccessTabHeader(),
            renderEmailTabHeader(),
            renderInsightsTabHeader(),
            renderMoreTabHeader(),
          ]}
          ref={ref}
        />
      </div>
      {/* Tabs content */}
      <div ref={ref}></div>
    </PageSection>
  );
};

export default Page;
