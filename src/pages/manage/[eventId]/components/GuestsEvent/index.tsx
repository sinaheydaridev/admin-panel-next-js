import moment from "moment-jalaali";
// components
import {
  Avatar,
  Button,
  Card,
  CheckboxLabel,
  FlexBox,
  Modal,
  TextField,
} from "components/common";
import GuestEventCard from "./components/GuestEventCard";
// locals
import texts from "../../texts";
import { Add, Pencil, PersonAdd } from "react-ionicons";
// hooks
import useQuickView from "hooks/useQuickView";
import Table from "components/common/Table";
// utils
import { dateObject } from "utils/date";

const GuestsEvent = () => {
  const { setConfig } = useQuickView();

  /* -------------------------------------------------------------------------- */
  /*                                   Modals                                   */
  /* -------------------------------------------------------------------------- */

  const renderUpdateHostModal = () => {
    return (
      <Modal id="updateHost" title={texts.update_host}>
        <div className="text-grey">
          نقش سینا (sina@gmail.com) را به روز کنید یا آنها را به عنوان میزبان
          حذف کنید.
        </div>
        <div className="mt-3">
          <h6 className="bold border-bottom-grey pb-2">{texts.host}</h6>
          <div className="col-md-8">
            <TextField textLabel="نقش" placeholder="" fullWidth />
            <div className="text-grey fs-7 mt-2">
              {texts.role_of_the_host_to_be_shown_on_the_event_page}
            </div>
          </div>
        </div>
        <Button className="mt-3" color="dark">
          {texts.save_change}
        </Button>
      </Modal>
    );
  };

  const renderAddHostModal = () => {
    return (
      <Modal id="addHost" title={texts.add_host}>
        <div className="text-grey">{texts.add_host_des}</div>
        <div className="mt-3">
          <div className="col-md-8">
            <TextField textLabel="ایمیل" placeholder="" fullWidth />
          </div>
        </div>
        <Button className="mt-3" color="dark">
          {texts.save_change}
        </Button>
      </Modal>
    );
  };

  const renderAddGuestModal = () => {
    return (
      <Modal id="addGuest" title={texts.add_guests}>
        <div className="text-grey">{texts.add_guest_des}</div>
        <div className="mt-3">
          <div className="col-md-8">
            <TextField
              textLabel="ایمیل هایی برای افزودن"
              placeholder=""
              fullWidth
            />
          </div>
        </div>
        <Button className="mt-3" color="dark">
          {texts.add_guest}
        </Button>
      </Modal>
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Content                                  */
  /* -------------------------------------------------------------------------- */

  const renderHostAndManage = () => {
    return (
      <div className="mt-5">
        <h4>{texts.hosts_and_managers}</h4>
        <h6 className="text-grey">{texts.hosts_and_managers_des}</h6>
        <div className="row  mt-4 align-items-center">
          <div className="col-lg-5 mb-3">
            <Card className="w-100 ms-4" variant="white">
              <FlexBox alignItems="center" justifyContent="space-between">
                <FlexBox>
                  <Avatar
                    src="/assets/images/avatar_23.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="me-2">
                    <div className="fs-7">sina</div>
                    <FlexBox>
                      <div className="fs-7">{texts.host}</div>
                      <div className="fs-7 guest-host-creator px-2 me-2">
                        {texts.creator}
                      </div>
                    </FlexBox>
                  </div>
                </FlexBox>
                <Pencil
                  onClick={() => setConfig({ id: "updateHost", isOpen: true })}
                  cssClasses="text-grey cursor-pointer"
                  width="1rem"
                  height="1rem"
                />
              </FlexBox>
            </Card>
          </div>
          <div className="col-lg-4">
            <Button
              onClick={() => setConfig({ id: "addHost", isOpen: true })}
              className="me-2"
              icon={<Add />}
            >
              {texts.add_host}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderGuestList = () => {
    return (
      <div className="mt-5">
        <FlexBox justifyContent="space-between" alignItems="center">
          <h5>{texts.guest_list}</h5>
          <Card
            onClick={() => setConfig({ id: "addGuest", isOpen: true })}
            className="text-grey add-guest-list rounded-circle"
            variant="white"
          >
            <PersonAdd width="1rem" height="1rem" />
          </Card>
        </FlexBox>
        <div className="mt-3">
          <TextField placeholder="جست و جو برای میهمان..." fullWidth />
        </div>
        <Table
          className="mt-4"
          head={texts.guest_list_table}
          body={[
            {
              tr: [
                "sina@test.com",
                dateObject.timeAge(new Date()),
                "تایید شده",
              ],
            },
            {
              tr: [
                "sina@test.com",
                dateObject.timeAge(new Date()),
                "تایید شده",
              ],
            },
          ]}
        />
        <div className="mt-4">
          <CheckboxLabel
            className="mt-3"
            title={texts.notify_me_as_guests_register}
            subTitle={texts.notify_me_as_guests_register_des}
          />
          <CheckboxLabel
            className="mt-3"
            title={texts.show_guest_list}
            subTitle={texts.show_guest_list_des}
          />
          <CheckboxLabel
            className="mt-3"
            title={texts.enable_event_chat}
            subTitle={texts.enable_event_chat_des}
          />
        </div>
      </div>
    );
  };

  return (
    <Card className="py-4">
      <div className="manage-pages-wrapper container">
        <h4>{texts.guests}</h4>
        <p className="text-grey">{texts.this_vent_requires_description}</p>
        <GuestEventCard />
        {renderHostAndManage()}
        {renderGuestList()}
      </div>
      {/* Modals */}
      {renderAddHostModal()}
      {renderUpdateHostModal()}
      {renderAddGuestModal()}
    </Card>
  );
};

export default GuestsEvent;
