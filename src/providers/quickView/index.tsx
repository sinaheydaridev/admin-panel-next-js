import { FC, useState } from "react";
import Context, { QuickViewConfig } from "./context";

const QuickViewProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<QuickViewConfig>({
    isOpen: false,
    id: "",
  });

  return (
    <Context.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default QuickViewProvider;
