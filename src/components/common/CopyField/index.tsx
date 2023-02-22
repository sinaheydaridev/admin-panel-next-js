import { FC } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutline } from "react-ionicons";
import { toast } from "react-toastify";
import FlexBox from "../FlexBox";
// locals
import useActions from "./useActions";

interface ICopyField {
  value: string;
}

const CopyField: FC<ICopyField> = ({ value }) => {
  const { copied, setCopied } = useActions();

  return (
    <FlexBox className="copy-field px-2" alignItems="center" justifyContent="space-between">
      <div className="ms-2">{value}</div>
      <CopyToClipboard
        text={value}
        onCopy={() => {
          toast("کپی شد", { type: "success" });
          setCopied(true);
        }}
      >
        <div className="copy-field-icon">
          <CopyOutline cssClasses="cursor-pointer " />
        </div>
      </CopyToClipboard>
    </FlexBox>
  );
};

export default CopyField;
