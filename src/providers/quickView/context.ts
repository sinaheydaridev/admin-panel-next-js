import { createContext } from "react";

export type ActionButton = {
  text?: string;
  onClick?: () => void;
};

export interface QuickViewConfig {
  isOpen: boolean;
  id: string;
}

export interface QuickViewContext {
  config: QuickViewConfig;
  setConfig: (config: QuickViewConfig) => void;
}

export default createContext<QuickViewContext>({
  config: { isOpen: false, id: "" },
  setConfig: () => null,
});
