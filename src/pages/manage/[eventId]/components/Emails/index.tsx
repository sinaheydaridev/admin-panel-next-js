import { Add, MailOutline, Pencil, Time } from "react-ionicons";
// components
import { Button, Card, FlexBox, Modal, TextField } from "components/common";
import TagsField from "components/common/TagsField";
// hooks
import useQuickView from "hooks/useQuickView";
// locals
import texts from "./texts";

const Emails = () => {
  const { setConfig } = useQuickView();

  const renderUpdateRegistrationModal = () => {
    return (
      <Modal id="updateRegistration" title="به روز رسانی تایید ثبت نام">
        <div className="mb-2">
          <TextField textLabel="عنوان" placeholder="" fullWidth />
        </div>
        <div className="mb-2">
          <TextField textLabel="بدنه" placeholder="" multiline fullWidth />
        </div>
        <FlexBox justifyContent="space-between">
          <Button color="dark">{texts.update_email}</Button>
          <Button color="dark" variant="none">
            {texts.send_a_preview}
          </Button>
        </FlexBox>
      </Modal>
    );
  };

  const renderSendEmailBlast = () => {
    return (
      <Modal id="sendEmailBlast" title="ارسال ایمیل انفجار">
        <div className="mb-2">
          <TextField textLabel="عنوان" placeholder="" fullWidth />
        </div>
        <div className="mb-2">
          <TextField textLabel="بدنه" placeholder="" multiline fullWidth />
        </div>
        <TagsField textLabel="ارسال به" placeholder="تگ کنید (اسپیس کلیک)" />
        <Button className="mt-4" color="dark">
          {texts.send_email_now}
        </Button>
      </Modal>
    );
  };

  return (
    <Card className="py-4">
      <div className="manage-pages-wrapper container">
        {/* <TagsField placeholder="تگ کن"/> */}
        {/* Registration */}
        <div>
          <h5>{texts.registration}</h5>
          <Card className="mt-3" variant="white">
            <div className="row align-items-center">
              <div className="col-md-8">
                <FlexBox alignItems="center">
                  <div className="ms-3 text-grey">
                    <MailOutline />
                  </div>
                  <div>
                    <div className="bold">
                      {texts.registration_confirmed_for}
                    </div>
                    <FlexBox className="fs-7 text-grey">
                      <div>{texts.to}</div>
                      <div>{texts.all_guests}</div>
                    </FlexBox>
                  </div>
                </FlexBox>
              </div>
              <div className="col-md-4">
                <FlexBox className="text-grey" alignItems="center">
                  <div className="fs-7 ms-2">{texts.as_guests_register}</div>
                  <Pencil
                    cssClasses="cursor-pointer"
                    width="1rem"
                    height="1rem"
                    onClick={() =>
                      setConfig({ id: "updateRegistration", isOpen: true })
                    }
                  />
                </FlexBox>
              </div>
            </div>
          </Card>
        </div>
        {/* Scheduled Emails */}
        <div className="mt-5">
          <FlexBox justifyContent="space-between">
            <h5>{texts.scheduled_emails}</h5>
            <Button
              color="dark"
              icon={<Add />}
              onClick={() => setConfig({ id: "sendEmailBlast", isOpen: true })}
            >
              {texts.new_email}
            </Button>
          </FlexBox>
          <div className="mt-3">
            {[1, 2, 3].map((item, index) => (
              <Card key={index} className="rounded-0" variant="white">
                <div className="row align-items-center">
                  <div className="col-md-10">
                    <FlexBox alignItems="center">
                      <div className="ms-3 text-grey">
                        <Time />
                      </div>
                      <div>
                        <div className="bold">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </div>
                        <FlexBox className="fs-7 text-grey">
                          <div>{texts.to}</div>
                          <div>{texts.all_guests}</div>
                        </FlexBox>
                      </div>
                    </FlexBox>
                  </div>
                  <div className="col-md-2">
                    <div className="text-grey">{texts.not_sent}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Modals */}
      {renderUpdateRegistrationModal()}
      {renderSendEmailBlast()}
    </Card>
  );
};

export default Emails;
