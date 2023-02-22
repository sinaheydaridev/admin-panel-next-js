import { FC } from "react";
import moment from "moment-jalaali";
import { range } from "lodash";
// components
import CustomLink from "../CustomLink";
import Card from "../Card";
import FlexBox from "../FlexBox";
import Chart from "components/chart";
// utils
import { dateObject } from "utils/date";
// locals
import texts from "./texts";
import { chartOptions } from "./options";

interface IGlance {
  title: string;
  subTitleValue: number | null;
  stat: number | null;
  chartData?: any[];
  chartColor?: "warning" | "primary" | "success" | "info";
  href?: string;
}

const Glance: FC<IGlance> = ({
  title,
  subTitleValue,
  stat,
  chartData = range(1, 31).map((num) => Math.round(Math.random() * 100)),
  chartColor = "warning",
  href = "/",
}) => {
  const renderChart = () => {
    return (
      <>
        <Chart
          className="chart"
          {...chartOptions(chartData, chartColor)}
          type="bar"
          height={120}
        />
        <FlexBox className="px-3" justifyContent="space-between">
          <div>تاامروز</div>
          <div>بازدید</div>
          <div>
            <span>
              {dateObject.getMonthName()}
            </span>
            <span>{moment().jDate()}</span>
          </div>
        </FlexBox>
      </>
    );
  };

  return (
    <CustomLink href={href}>
      <Card className="glance py-2 px-4">
        <FlexBox justifyContent="space-between">
          <div>
            <div className="fs-5">{title}</div>
            <div className="text-grey">
              {texts.all_time}: {subTitleValue! > 0 ? subTitleValue : "-"}
            </div>
          </div>
          <div>
            <div className="fs-3">{stat}</div>
          </div>
        </FlexBox>
        {renderChart()}
      </Card>
    </CustomLink>
  );
};

export default Glance;
