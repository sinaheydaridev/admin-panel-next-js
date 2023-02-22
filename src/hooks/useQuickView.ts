import { useContext } from "react";
import Context from "providers/quickView/context";

const useQuickView = () => useContext(Context);
export default useQuickView;
