import { useState } from "react";

type Path =
  | "collectEmails"
  | "links"
  | "money"
  | "videos"
  | "text"
  | "promoCodes"
  | "posts"
  | "creditPacks"
  | undefined;

type Link = {
  id: number;
  titleValue: string;
  urlValue: string;
};

type Money = {
  id: number;
  value: string;
};

type PromoCode = {
  id: number;
  name: string;
  affiliate: string;
  discount: string;
  code: string;
};

const useActions = () => {
  const [route, setRoute] = useState<{ path: Path; title: string }>({
    path: undefined,
    title: "چه نوع بلاکی را می خواهید اضافه کنید؟",
  });
  const [links, setLinks] = useState<Link[]>([]);
  const [money, setMoney] = useState<Money[]>([]);
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);

  // ==============================================
  // ==================> links <===================
  // ==============================================

  const handleAddNewLink = () => {
    const newItem: Link = {
      id: Math.random(),
      titleValue: "",
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
    type: "title" | "url",
    value: string
  ) => {
    const items = [...links];
    const item = items.find(({ id }) => id === currentId) as Link;
    if (type === "title") {
      item.titleValue = value;
    } else {
      item.urlValue = value;
    }
    setLinks(items);
  };

  // ==============================================
  // ==================> money <===================
  // ==============================================

  const handleAddNewMoney = () => {
    const newItem: Money = {
      id: Math.random(),
      value: "",
    };
    setMoney([...money, newItem]);
  };

  const handleRemoveMoney = (currentId: number) => {
    const items = [...money];
    const itemIndex = items.findIndex(({ id }) => id === currentId);
    items.splice(itemIndex, 1);
    setMoney(items);
  };

  const handleChangeMoney = (currentId: number, value: string) => {
    const items = [...money];
    const item = items.find(({ id }) => id === currentId) as Money;
    item.value = value;
    setMoney(items);
  };

  // ==============================================
  // ==================> promo code <==============
  // ==============================================

  const handleAddNewPromoCode = () => {
    const newItem: PromoCode = {
      id: Math.random(),
      name: "",
      affiliate: "",
      discount: "",
      code: "",
    };
    setPromoCodes([...promoCodes, newItem]);
  };

  const handleRemovePromoCode = (currentId: number) => {
    const items = [...promoCodes];
    const itemIndex = items.findIndex(({ id }) => id === currentId);
    items.splice(itemIndex, 1);
    setPromoCodes(items);
  };

  const handleChangePromoCode = (
    currentId: number,
    type: "name" | "affiliate" | "discount" | "code",
    value: {
      name?: string;
      affiliate?: string;
      discount?: string;
      code?: string;
    }
  ) => {
    const items = [...promoCodes];
    const item = items.find(({ id }) => id === currentId) as PromoCode;
    if (type === "name") {
      item.name = value.name || "";
    }
    if (type === "affiliate") {
      item.affiliate = value.affiliate || "";
    }
    if (type === "discount") {
      item.discount = value.discount || "";
    }
    if (type === "code") {
      item.code = value.code || "";
    }

    setPromoCodes(items);
  };

  return {
    route,
    links,
    money,
    promoCodes,
    setRoute,
    handleAddNewLink,
    handleRemoveLink,
    handleChangeLink,
    handleAddNewMoney,
    handleRemoveMoney,
    handleChangeMoney,
    handleAddNewPromoCode,
    handleRemovePromoCode,
    handleChangePromoCode,
  };
};

export default useActions;
