import { FC } from "react";

interface IMain {
  children: React.ReactNode;
}

const MainProfile: FC<IMain> = ({ children }) => {
  return <main className="profile-content container">{children}</main>;
};

export default MainProfile;
