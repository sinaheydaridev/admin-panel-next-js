import { FC } from "react";
// components
import FlexBox from "../FlexBox";

interface ICheckboxLabel {
  title: string;
  subTitle?: string;
  className?: string;
  onChange?: (isChecked: boolean) => void;
}

const CheckboxLabel: FC<ICheckboxLabel> = ({
  title,
  subTitle,
  className,
  onChange,
}) => {
  return (
    <FlexBox className={className} alignItems="center">
      <div className="ms-2 mt-2">
        <input
          type="checkbox"
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
      </div>
      <div>
        <div className="fs-6">{title}</div>
        {subTitle && <div className="fs-7 text-grey">{subTitle}</div>}
      </div>
    </FlexBox>
  );
};

export default CheckboxLabel;
