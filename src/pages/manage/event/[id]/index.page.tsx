import Image from "next/image";
import {
  Calendar,
  CheckboxOutline,
  ChevronBack,
  CloudUploadOutline,
  MailOutline,
  PaperPlaneOutline,
} from "react-ionicons";
// components
import CalendarCard from "components/common/CalendarCard";
import {
  Avatar,
  Button,
  Card,
  CustomLink,
  FlexBox,
  Modal,
  TextField,
  Touch,
} from "components/common";
import PageSection from "components/layouts/dashboard/PageSection";
// utils
import { dateObject } from "utils/date";
// constants
import { AppRoute } from "constants/enums";
// hooks
import useQuickView from "hooks/useQuickView";
// locals
import texts from "./texts";
import CopyField from "components/common/CopyField";

const Page = () => {
  const { setConfig } = useQuickView();

  const renderContactTheHostModal = () => {
    return (
      <Modal id="contactTheHost" title={texts.contact_the_host}>
        <h6 className="text-grey">
          {texts.we_will_tell_the_host_that_the_message_comes_from_you} (sina)
        </h6>
        <TextField
          className="mt-3"
          placeholder={texts.whats_question_for_the_host}
          rows={3}
          multiline
          fullWidth
        />
        <div className="fs-7 text-grey my-2">
          {texts.the_host_will_send_replies_to}
          <span className="me-2 bold">sina@gmailc.com</span>
        </div>
        <Button className="mt-3" icon={<PaperPlaneOutline />} color="dark">
          {texts.send_message}
        </Button>
      </Modal>
    );
  };

  const renderShareModal = () => {
    return (
      <Modal id="share" title={texts.share_this_event}>
        <CopyField value="https://lu.ma/" />
      </Modal>
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Layouts                                  */
  /* -------------------------------------------------------------------------- */

  const renderRightElement = () => {
    return (
      <div className="col-md-7">
        <h2>این نام رویداد است</h2>
        <FlexBox className="mt-3 text-primary">
          <Calendar width="1rem" height="1rem" cssClasses="mb-3 ms-2" />
          <h6>{dateObject.llllFormat(new Date())}</h6>
        </FlexBox>
        <div className="mb-4">
          <h4 className="mt-4">{texts.registration}</h4>
          <div className="mt-4 text-grey">
            {texts.we_will_tell_the_host_that_the_message_comes_from_you}
          </div>
          <Card className="mt-3">
            <FlexBox>
              <Avatar
                src="/assets/images/avatar_23.png"
                width={50}
                height={50}
              />
              <div className="me-3">
                <div>
                  <div className="bold">sina</div>
                  <div className="text-grey">sina@gmail.com</div>
                </div>
              </div>
            </FlexBox>
            <Button className="mt-3 me-5" icon={<CheckboxOutline />}>
              {texts.registration}
            </Button>
          </Card>
        </div>
      </div>
    );
  };

  const renderLeftElement = () => {
    return (
      <div className="col-md-4">
        <div className="pb-2 border-bottom-grey">
          <Touch className="mt-3">
            <CustomLink href={AppRoute.profile}>
              <FlexBox justifyContent="space-between" alignItems="center">
                <FlexBox>
                  <Avatar
                    src="/assets/images/avatar_23.png"
                    width={50}
                    height={50}
                  />
                  <div className="me-3">
                    <div>
                      <div className="bold">sina</div>
                      <div className="text-grey">{texts.host}</div>
                    </div>
                  </div>
                </FlexBox>
                <ChevronBack cssClasses="text-grey" />
              </FlexBox>
            </CustomLink>
          </Touch>
          <Button
            className="mt-3 text-grey"
            variant="none"
            color="dark"
            icon={<MailOutline />}
            onClick={() => setConfig({ id: "contactTheHost", isOpen: true })}
          >
            {texts.contact_the_host}
          </Button>
        </div>
        <div className="py-3 border-bottom-grey">
          <h5>{texts.join_details}</h5>
          <div className="text-grey mt-3 fs-7">{texts.join_details_des}</div>
        </div>
        <Button
          className="mt-3 text-grey"
          color="grey"
          icon={<CloudUploadOutline />}
          onClick={() => setConfig({ id: "share", isOpen: true })}
        >
          {texts.share_this_event}
        </Button>
      </div>
    );
  };

  return (
    <PageSection pageTitle="event">
      <div className="container px-3">
        <div className="w-100">
          <div className="position-relative">
            <Image
              className="rounded"
              src="/assets/images/graphic-design.avif"
              width={1500}
              height={700}
              objectFit="cover"
              alt=""
            />
            <div className="position-absolute calendar-card-event">
              <CalendarCard mode="big" />
            </div>
          </div>
        </div>
        <FlexBox className="my-5 py-4" justifyContent="center">
          <div className="col-md-9 col-12">
            <FlexBox>
              <div className="text-grey">{texts.this_is_your_event}</div>
              <span className="mx-3">-</span>
              <CustomLink href="#" className="text-hover-primary">
                {texts.manage_event}
              </CustomLink>
            </FlexBox>
            <div className="row mt-4">
              {renderRightElement()}
              {renderLeftElement()}
            </div>
          </div>
        </FlexBox>
      </div>
      {renderContactTheHostModal()}
      {renderShareModal()}
    </PageSection>
  );
};

export default Page;
