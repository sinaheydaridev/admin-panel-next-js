import classNames from "classnames";
import { FC, useState } from "react";

interface ISwitch {
  defaultCheck?: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: FC<ISwitch> = ({ defaultCheck = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="position-relative">
      <input
        className={classNames("switch switch--shadow", { checked: isChecked })}
        type="checkbox"
        defaultChecked={defaultCheck}
        checked={isChecked}
        onChange={(e) => {
          onChange(e.target.checked);
          setIsChecked(e.target.checked);
        }}
      />
      <label></label>
    </div>
  );
};

export default Switch;
