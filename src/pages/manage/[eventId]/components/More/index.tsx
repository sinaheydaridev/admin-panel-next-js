import { useRef } from "react";
// components
import {
  Button,
  Calendar,
  Card,
  CheckboxLabel,
  FlexBox,
  Tabs,
} from "components/common";
// locals
import texts from "./texts";
import useActions from "./useActions";
import { CloseCircleOutline, CopyOutline } from "react-ionicons";

const More = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { date, setDate } = useActions();

  const renderCloneEvent = () => {
    return (
      <Card className="p-3" variant="white">
        <h5>{texts.clone_event}</h5>
        <div className="fs-7 text-grey mt-3">{texts.clone_event_text}</div>
        <FlexBox className="mt-3">
          <Calendar
            value={date}
            onChange={(date) => setDate(date)}
            label="زمان شروع جدید"
          />
        </FlexBox>
        <CheckboxLabel
          className="mt-3"
          title={texts.create_a_new_zoom_meeting_for_the_new_event}
        />
        <Button className="mt-3" color="dark" icon={<CopyOutline />}>
          {texts.clone_event}
        </Button>
      </Card>
    );
  };

  const renderCancelEvent = () => {
    return (
      <Card className="p-3" variant="white">
        <h5>{texts.cancel_event}</h5>
        <div className="fs-7 text-grey mt-3">{texts.cancel_event_des}</div>
        <Button className="mt-3" color="warning" icon={<CloseCircleOutline />}>
          {texts.cancel_event}
        </Button>
      </Card>
    );
  };

  return (
    <Card className="py-4">
      <div className="manage-pages-wrapper container">
        <Tabs
          tabList={texts.tabs}
          variant="card"
          tabPanelList={[renderCloneEvent(), renderCancelEvent()]}
          ref={ref}
        />
        <div ref={ref}></div>
      </div>
    </Card>
  );
};

export default More;
