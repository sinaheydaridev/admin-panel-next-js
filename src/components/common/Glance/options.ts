import { range } from "lodash";
import { Props } from "react-apexcharts";
// constants
import colors from "constants/colors";

export const chartOptions = (data: any[], chartColor: "warning" | "primary" | "success" | "info") => {
  const opt: Props = {
    series: [
      {
        data,
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [range(1, 31)],
        labels: { show: false },
      },
      yaxis: { show: false },
      tooltip: {
        enabled: false,
      },
      colors: [colors[chartColor]],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
        },
      },
    },
  };

  return opt;
};
