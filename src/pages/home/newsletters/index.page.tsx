import { Pencil } from "react-ionicons";
// components
import { Button, CustomLink, FlexBox, SectionRow } from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
// constants
import { AppRoute } from "constants/enums";
// utils
import { dateObject } from "utils/date";
// local
import texts from "./texts";

const Page = () => {
  const renderHeader = () => {
    return (
      <FlexBox justifyContent="space-between">
        <h2>{texts.newsletters}</h2>
        <CustomLink href={AppRoute.createNewsletters}>
          <Button
            icon={<Pencil width="1rem" height="1rem" />}
            variant="outlined"
            color="primary"
          >
            {texts.compose}
          </Button>
        </CustomLink>
      </FlexBox>
    );
  };

  const renderPastItem = () => {
    return (
      <div className="border mb-4 rounded py-2 px-3">
        <FlexBox justifyContent="space-between" alignItems="center">
          <div className="fs-5">عنوان</div>
          <div className="text-grey">
            <Pencil width="1rem" height="1rem" />
          </div>
        </FlexBox>
        <div className="fs-7 text-grey mt-2">
          {dateObject.llllFormat(new Date())}
        </div>
        <p className="fs-7 mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
    );
  };

  return (
    <PageSection pageTitle={texts.newsletters} titleElement={renderHeader()}>
      <div className="col-lg-8">
        <SectionRow
          header={{ title: texts.draft }}
          customContentMarginClasses="mt-0"
        >
          <div className="border-bottom-grey pb-4">
            {[1, 2, 3].map((item) => (
              <FlexBox key={item} className="fs-7" alignItems="center">
                <CustomLink
                  className="text-primary"
                  href={AppRoute.createNewsletters}
                >
                  عنوان
                </CustomLink>
                <div className="text-grey me-2 mt-1">
                  {dateObject.timeAge(new Date())}
                </div>
              </FlexBox>
            ))}
            <Button className="mt-4" color="grey">
              {texts.show_more}
            </Button>
          </div>
        </SectionRow>
        <SectionRow
          className="mt-3"
          header={{ title: texts.past_news_letters }}
          customContentMarginClasses="mt-0"
        >
          <div className=" border-bottom-grey pb-4">
            <h5 className="mb-3"></h5>
            {renderPastItem()}
            {renderPastItem()}
            {renderPastItem()}
          </div>
        </SectionRow>
      </div>
    </PageSection>
  );
};

export default Page;
