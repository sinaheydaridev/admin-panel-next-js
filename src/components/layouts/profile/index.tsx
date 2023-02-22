import { FC } from "react";
// components
import ProfileHeader from "./Header";
import MainProfile from "./Main";
import ProfileNavbar from "./Navbar";

interface ILayout {
  children: React.ReactNode;
}

const ProfileLayout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <ProfileNavbar />
      <ProfileHeader />
      <MainProfile>{children}</MainProfile>
    </>
  );
};

export default ProfileLayout;
