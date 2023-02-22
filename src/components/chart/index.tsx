import { FC } from "react";
import { Props } from "react-apexcharts";
import dynamic from "next/dynamic";
import merge from "lodash/merge";
import classNames from "classnames";

const ReactChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IChart extends Props {
  className?: string;
}

const Chart: FC<IChart> = ({ className, ...props }) => {
  const options = merge(props, {
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: "area",
      },
    },
  });

  return (
    <div className={classNames("chart", className)}>
      <ReactChart {...options} />
    </div>
  );
};

export default Chart;
