import { FC } from "react";
import Image from "next/image";
import { SettingsOutline } from "react-ionicons";
// components
import { Button, CustomLink, FlexBox, Touch } from "components/common";
import CalendarCard from "components/common/CalendarCard";
// utils
import { dateObject } from "utils/date";

interface IPast {
  to: string;
}

const Past: FC<IPast> = ({ to }) => {
  return (
    <Touch className="mb-3">
      <CustomLink href={to}>
        <div className="past-event px-2 py-1 rounded">
          <FlexBox alignItems="center">
            <div className="desktop">
              <CalendarCard />
            </div>
            <div className="event-image me-2 rounded">
              <Image
                src="/assets/images/event.jpg"
                alt=""
                width={120}
                height="100%"
              />
            </div>
            <div className="me-2">
              <div>لورم ایپسوم متن ساختگی با تولید سادگی </div>
              <div className="text-grey mt-2 fs-7">
                {dateObject.llllFormat(new Date())}
              </div>
            </div>
          </FlexBox>
          <Button
            className="past-event-manage-btn"
            icon={<SettingsOutline />}
            color="grey"
          >
            میدیریت
          </Button>
        </div>
      </CustomLink>
    </Touch>
  );
};

export default Past;
