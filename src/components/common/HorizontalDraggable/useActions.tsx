import { useState } from "react";

const useActions = () => {
  const [items, setItems] = useState([
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
    { title: "عنوان بلاک", subTitle: "زیر عنوان بلاک" },
  ]);

  return { items, setItems };
};

export default useActions;
