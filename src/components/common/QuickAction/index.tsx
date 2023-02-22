import { FC } from "react";
import { ArrowBack } from "react-ionicons";
// components
import Card from "../Card";
import CustomLink from "../CustomLink";
import FlexBox from "../FlexBox";

interface IQuickAction {
  title: string;
  type?: "user" | "calender" | "mail" | "info";
}

const QuickAction: FC<IQuickAction> = ({ title, type }) => {
  const renderUserIcon = () => {
    return;
  };
  const renderCalenderIcon = () => {
    return;
  };
  const renderMailIcon = () => {
    return;
  };
  const renderInfoIcon = () => {
    return;
  };

  return (
    <CustomLink href={"/home"}>
      <Card className="quick-action p-3">
        <FlexBox
          className="h-100"
          alignItems="center"
          justifyContent="space-between"
        >
          <div className="fs-5">{title}</div>
          <ArrowBack width="17px" height="17px" />
        </FlexBox>
      </Card>
    </CustomLink>
  );
};

export default QuickAction;
