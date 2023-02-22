import { ReachEditor, Button } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
import { ChevronBack } from "react-ionicons";
// local
import texts from "./texts";

const Page = () => {
  return (
    <PageSection pageTitle={texts.newsletters} titleText={texts.newsletters}>
      <ReachEditor />
      <Button className="mt-4" color="dark" icon={<ChevronBack />}>
        {texts.send_newsletter}
      </Button>
    </PageSection>
  );
};

export default Page;
