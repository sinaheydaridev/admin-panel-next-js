import { FC } from "react";
// components
import Main from "./Main";
import { MobileHeader } from "./mobile";
import Sidebar from "./Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const DashboardLayout: FC<ILayout> = ({ children }) => {
  return (
    <div className="main container">
      <MobileHeader />
      <div className="row p-0 m-0">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default DashboardLayout;
