import { FC } from "react";
import classNames from "classnames";
import FlexBox from "../FlexBox";

interface ISectionRow {
  children: React.ReactNode;
  className?: string;
  header: {
    title: string;
    subtitle?: string;
    leftElement?: React.ReactNode;
    leftText?: string;
  };
  customContentMarginClasses?: string;
}

const SectionRow: FC<ISectionRow> = ({
  children,
  header: { title, subtitle, leftElement, leftText },
  className,
  customContentMarginClasses,
}) => {
  return (
    <div className={classNames("mt-4", className)}>
      <FlexBox justifyContent="space-between" alignItems="center">
        <div>
          <h4>{title}</h4>
          {subtitle && <h6 className="text-grey normal-lt mt-2">{subtitle}</h6>}
        </div>
        {leftElement && <div>{leftElement}</div>}
        {leftText && (
          <div className="text-grey">
            <h6>{leftText}</h6>
          </div>
        )}
      </FlexBox>
      <div
        className={classNames(
          { "mt-4": !customContentMarginClasses },
          customContentMarginClasses,
          "pt-2"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionRow;
