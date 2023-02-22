import { FC } from "react";
import { dateObject } from "utils/date";
import Card from "../Card";
import FlexBox from "../FlexBox";

interface ICalendarCard {
  mode?: "big" | "small";
}

const CalendarCard: FC<ICalendarCard> = ({ mode = "small" }) => {
  if (mode === "big") {
    return (
      <Card
        variant="white"
        className="text-center border-grey big calendar-card"
        isPadding={false}
      >
        <header className="bg-warning py-1">
          <h4>{dateObject.getMonthName()}</h4>
        </header>
        <h2 className="mt-3">{dateObject.getCurrentDayNumber(new Date())}</h2>
        <div className="fs-7 text-grey">
          {dateObject.getCurrentDayLabel(new Date())}
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant="white"
      className="text-center border-grey small calendar-card"
      isPadding={false}
    >
      <header>
        <div  className="small-header text-white">
          {dateObject.getMonthName()}
        </div>
      </header>
      <h5 className="mt-2">{dateObject.getCurrentDayNumber(new Date())}</h5>
    </Card>
  );
};

export default CalendarCard;
