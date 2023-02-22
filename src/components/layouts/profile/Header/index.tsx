import React from "react";
import {
  LogoFacebook,
  LogoInstagram,
  LogoTiktok,
  LogoTwitter,
  LogoYoutube,
  PencilSharp,
} from "react-ionicons";
// components
import {
  Avatar,
  CheckboxLabel,
  EditButton,
  FlexBox,
  Modal,
  TextField,
} from "components/common";
// hooks
import useQuickView from "hooks/useQuickView";
import useActions, { SocialType } from "./useActions";
// locals
import texts from "./texts";

const ProfileHeader = () => {
  const { links, handleAddNewLink, handleRemoveLink, handleChangeLink } =
    useActions();
  const { setConfig } = useQuickView();
  const icons = ["instagram", "twitter", "tiktok", "youtube", "facebook"];

  /* -------------------------------------------------------------------------- */
  /*                                 TextFields                                 */
  /* -------------------------------------------------------------------------- */

  const renderTextField = () => {
    return links.map((item) => {
      switch (item.type) {
        case "instagram":
          return (
            <TextField
              key={Math.random()}
              placeholder="Instagram Url"
              icon={<LogoInstagram cssClasses="text-grey ms-5" />}
              className="mb-3"
              fullWidth
            />
          );
        case "twitter":
          return (
            <TextField
              key={Math.random()}
              placeholder="Twitter Url"
              icon={<LogoTwitter cssClasses="text-grey ms-5" />}
              className="mb-3"
              fullWidth
            />
          );
        case "tiktok":
          return (
            <TextField
              key={Math.random()}
              placeholder="Tiktok Url"
              icon={<LogoTiktok cssClasses="text-grey ms-5" />}
              className="mb-3"
              fullWidth
            />
          );
        case "youtube":
          return (
            <TextField
              key={Math.random()}
              placeholder="Youtube Url"
              icon={<LogoYoutube cssClasses="text-grey ms-5" />}
              className="mb-3"
              fullWidth
            />
          );
        case "facebook":
          return (
            <TextField
              key={Math.random()}
              placeholder="Facebook Url"
              icon={<LogoFacebook cssClasses="text-grey ms-5" />}
              className="mb-3"
              fullWidth
            />
          );
      }
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                                    Icons                                   */
  /* -------------------------------------------------------------------------- */

  const renderIcons = () => {
    return icons
      .filter(
        (item) => !links.map((item) => item.type).includes(item as SocialType)
      )
      .map((item) => {
        switch (item) {
          case "instagram":
            return (
              <LogoInstagram
                cssClasses="cursor-pointer mx-2"
                key={Math.random()}
                onClick={() => handleAddNewLink("instagram")}
              />
            );
          case "twitter":
            return (
              <LogoTwitter
                cssClasses="cursor-pointer mx-2"
                key={Math.random()}
                onClick={() => handleAddNewLink("twitter")}
              />
            );
          case "tiktok":
            return (
              <LogoTiktok
                cssClasses="cursor-pointer mx-2"
                key={Math.random()}
                onClick={() => handleAddNewLink("tiktok")}
              />
            );
          case "youtube":
            return (
              <LogoYoutube
                cssClasses="cursor-pointer mx-2"
                key={Math.random()}
                onClick={() => handleAddNewLink("youtube")}
              />
            );
          case "facebook":
            return (
              <LogoFacebook
                cssClasses="cursor-pointer mx-2"
                key={Math.random()}
                onClick={() => handleAddNewLink("facebook")}
              />
            );
        }
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                                    Modal                                   */
  /* -------------------------------------------------------------------------- */

  const renderEditProfileModal = () => {
    return (
      <Modal id="editProfileModal" title="ویرایش پروفایل">
        <FlexBox justifyContent="center">
          <Avatar
            src="/assets/images/avatar_23.png"
            width={100}
            height={100}
            alt=""
            isEdit
          />
        </FlexBox>
        <TextField placeholder="نام کاربری" fullWidth />
        <TextField
          className="mt-3"
          placeholder="بیو کوتاه"
          multiline
          fullWidth
        />
        <div className="mt-3">
          <h5 className="text-grey">{texts.social_login}</h5>
          <div className="my-3">{renderTextField()}</div>
          <FlexBox className="text-grey mt-4 px-5 mx-5" justifyContent="center">
            {renderIcons()}
          </FlexBox>
        </div>
        <div className="mt-3">
          <CheckboxLabel title={texts.compact_bio} subTitle={texts.compact_bio_des}/>
        </div>
        <EditButton className="mt-4" fullWidth>{texts.save_change}</EditButton>
      </Modal>
    );
  };

  return (
    <FlexBox className="profile-header" direction="column" alignItems="center">
      <FlexBox className="mt-5" direction="column" alignItems="center">
        <Avatar
          src="/assets/images/avatar_23.png"
          alt="user-profile"
          width={130}
          height={130}
        />
        <div className="mt-4">
          <h2 className="bold">Sina</h2>
        </div>
        <div
          className="mt-4"
          onClick={() => setConfig({ id: "editProfileModal", isOpen: true })}
        >
          <EditButton icon={<PencilSharp />}>{texts.edit_bio}</EditButton>
        </div>
      </FlexBox>
      {renderEditProfileModal()}
    </FlexBox>
  );
};

export default ProfileHeader;
