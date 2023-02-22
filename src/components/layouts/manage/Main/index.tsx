import { FC } from "react";
// components
import Footer from "../Footer";
import Header from "../Header";

interface IManageLayout {
  children: React.ReactNode;
}

const ManageLayout: FC<IManageLayout> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default ManageLayout;
