// components
import { Card } from "components/common";
import ChartArea from "components/chart/area";
// locals
import texts from "./texts";

const Insights = () => {
  return (
    <Card className="py-4">
      <div className="manage-pages-wrapper container">
        <h5>{texts.page_views}</h5>
        <h6 className="text-grey">{texts.see_your_event_page_views_over_time}</h6>
        <ChartArea />
      </div>
    </Card>
  );
};

export default Insights;
