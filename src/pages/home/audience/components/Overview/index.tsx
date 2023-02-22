// components
import ChartArea from "components/chart/area";
import Table from "components/common/Table";
// utils
import { dateObject } from "utils/date";

const Overview = () => {
  return (
    <div>
      <ChartArea data={[0, 0, 0, 0, 2, 22, 0]} />
      <Table
        className="mt-5"
        head={["نام", "رویداد", "درآمد", "اولین بازدید"]}
        body={[
          {
            tr: ["test@test.com", "1", "$0", "26" + dateObject.getMonthName()],
          },
          {
            tr: ["test@test.com", "1", "$0", "26" + dateObject.getMonthName()],
          },
          {
            tr: ["test@test.com", "1", "$0", "26" + dateObject.getMonthName()],
          },
          {
            tr: ["test@test.com", "1", "$0", "26" + dateObject.getMonthName()],
          },
        ]}
      />
    </div>
  );
};

export default Overview;
