// components
import { Modal } from "components/common";
import SwitchProfileTheme from "components/switchTheme/profile";
import ProfileOptions from "./components/ProfileOptions";
import AddBlock from "./components/AddBlock";
import CollectionEmails from "./components/blocks/CollectionEmails";
import Links from "./components/blocks/Links";
import Videos from "./components/blocks/Videos";
import Text from "./components/blocks/Text";
import PromoCode from "./components/blocks/PromoCodes";
import Posts from "./components/blocks/Posts";
import PageSection from "components/layouts/dashboard/PageSection";
import HorizontalDraggable from "components/common/HorizontalDraggable";
// hooks
import useQuickView from "hooks/useQuickView";
// locals
import texts from "./texts";

const Page = () => {
  const { setConfig, config } = useQuickView();

  const renderRecorderModal = () => {
    return (
      <Modal id="recorder" title="سفارش مجدد بلوک ها">
        <div>
          بلوک‌ها را در زیر بکشید و رها کنید تا آنها را دوباره مرتب کنید.
        </div>
        <div className="mt-4">
          <HorizontalDraggable />
        </div>
      </Modal>
    );
  };

  const renderThemesModal = () => {
    return (
      <Modal id="themes" title="تم را انتخاب کنید">
        <SwitchProfileTheme />
      </Modal>
    );
  };

  return (
    <PageSection pageTitle="پروفایل کاربری">
      <div className="container my-5">
        <div className="text-start fs-4 text-grey">
          https://lu.ma/u/usr-chhEAdRC0Nwsdc
        </div>
        <div className="mt-3 fs-6 text-grey">
          {
            texts.this_block_has_no_valid_items_so_it_is_not_shown_to_page_visitors
          }
        </div>
        <div className="my-5">
          <CollectionEmails
            title="عنوان جمع اوری ایمیل ها"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          />
          <Links
            title="عنوان لینک"
            links={[
              { title: "لورم ایپسوم متن ساختگی با تولید", url: "test" },
              { title: "لورم ایپسوم متن ساختگی با تولید", url: "test" },
            ]}
          />
          <Videos
            title="عنوان ویویدو"
            items={[
              {
                title: "لورم ایپسوم متن ساختگی با تولید",
                url: "https://www.youtube.com/embed/DrQfAX0mkSM",
              },
              {
                title: "لورم ایپسوم متن ساختگی با تولید",
                url: "https://www.youtube.com/embed/DrQfAX0mkSM",
              },
            ]}
          />
          <Text
            title="عنوان متن"
            description="لورم ایپسوم متن ساختگی با تولید"
          />
          <PromoCode
            title="عنوان بسته های اعتباری"
            codes={[
              {
                code: "1234",
                discount: "تخفیف تستی",
                affiliateLink: "لینک",
                name: "نام تستی",
              },
            ]}
          />
          <Posts
            title="عنوان پست"
            posts={[
              {
                title: "لورم ایپسوم متن ساختگی با تولید",
                date: new Date(),
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
              },
              {
                title: "لورم ایپسوم متن ساختگی با تولید",
                date: new Date(),
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
              },
            ]}
          />
        </div>
        {/* Modals */}
        <AddBlock />
        {renderRecorderModal()}
        {renderThemesModal()}
        <ProfileOptions />
      </div>
    </PageSection>
  );
};

export default Page;
