import { useTheme } from "next-themes";
// components
import Chart from "..";
// constants
import { AppThemeMode } from "constants/enums";
import colors from "constants/colors";
// local
import { chartOptions } from "./options";
import { FC } from "react";

interface IChartArea {
  data?: number[];
}

const ChartArea: FC<IChartArea> = ({
  data = [31, 40, 28, 51, 42, 109, 100],
}) => {
  const { theme } = useTheme();
  const appThemeMode = theme as AppThemeMode;
  return (
    <Chart
      className="chart-area"
      type="area"
      height={300}
      {...chartOptions({
        data,
        gridBorderColor:
          appThemeMode === AppThemeMode.dark ? colors.grey900 : colors.grey200,
        xyColor: colors.grey500,
      })}
    />
  );
};

export default ChartArea;
