import { Props } from "react-apexcharts";

type ChartAreOptions = {
  data: any;
  gridBorderColor: string;
  xyColor: string;
};

export const chartOptions = ({
  data,
  gridBorderColor,
  xyColor,
}: ChartAreOptions) => {
  const opt: Props = {
    series: [
      {
        name: "Views",
        data: data,
      },
    ],
    options: {
      grid: {
        borderColor: gridBorderColor,
      },
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: "177px",
        },
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        labels: {
          style: {
            colors: xyColor,
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          style: {
            colors: xyColor,
          },
        },
      },
      tooltip: {
        x: {
          show: false,
        },
      },
      colors: ["#f54269"],
    },
  };

  return opt;
};
