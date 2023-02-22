// components
import ChartArea from "components/chart/area";
import { SectionRow } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
// locals
import texts from "./texts";

const Page = () => {
  return (
    <PageSection pageTitle={texts.insights} titleText={texts.insights}>
      <SectionRow header={{ title: texts.profile_page_views }}>
        <ChartArea />
      </SectionRow>
    </PageSection>
  );
};

export default Page;
