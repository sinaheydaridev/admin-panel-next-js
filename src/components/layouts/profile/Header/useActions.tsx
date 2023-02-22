import { useState } from "react";

export type SocialType =
  | "instagram"
  | "twitter"
  | "tiktok"
  | "youtube"
  | "facebook";

type Link = {
  id: number;
  urlValue: string;
  type: SocialType;
};

const useActions = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const handleAddNewLink = (type: SocialType) => {
    const newItem: Link = {
      id: Math.random(),
      type: type,
      urlValue: "",
    };
    setLinks([...links, newItem]);
  };

  const handleRemoveLink = (currentId: number) => {
    const items = [...links];
    const itemIndex = items.findIndex(({ id }) => id === currentId);
    items.splice(itemIndex, 1);
    setLinks(items);
  };

  const handleChangeLink = (
    currentId: number,
    type: SocialType,
    value: string
  ) => {
    const items = [...links];
    const item = items.find(({ id }) => id === currentId) as Link;
    item.urlValue = value;
    setLinks(items);
  };

  return {
    links,
    handleAddNewLink,
    handleRemoveLink,
    handleChangeLink,
  };
};

export default useActions;
