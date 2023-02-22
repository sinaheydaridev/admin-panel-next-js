import { useState } from "react";

const useActions = () => {
  const [date, setDate] = useState("");
  const [requireRegistration, setRequireRegistration] = useState(false);
  const [requireRegistrationApproval, setRequireRegistrationApproval] =
    useState(false);

  return {
    date,
    requireRegistration,
    requireRegistrationApproval,
    setDate,
    setRequireRegistration,
    setRequireRegistrationApproval,
  };
};

export default useActions;
