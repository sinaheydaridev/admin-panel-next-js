import dynamic from "next/dynamic";
import { FC } from "react";
import InfoBox from "../InfoBox";
// components
import TextField from "../TextField";
// hooks
import useActions from "./useActions";

const ReactCalendar = dynamic<any>(() => import("react-persian-calendar"), {
  ssr: false,
});

interface ICalendar {
  onChange?: (data: any) => void;
  value?: string;
  textFieldClassName?: string;
  label?: string;
}

const Calendar: FC<ICalendar> = ({
  onChange,
  value,
  textFieldClassName,
  label,
}) => {
  const { isOpen, handleOpen } = useActions();

  return (
    <div className="position-relative">
      <TextField
        className={textFieldClassName}
        placeholder="تاریخ"
        onClick={handleOpen}
        value={value}
        textLabel={label}
      />
      <InfoBox onClickOutSide={handleOpen} isOpen={isOpen}>
        <ReactCalendar
          onChange={(value: string) =>
            onChange && onChange(value.replaceAll("-", "/"))
          }
        />
      </InfoBox>
    </div>
  );
};

export default Calendar;
