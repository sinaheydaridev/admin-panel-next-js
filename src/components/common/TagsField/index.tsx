import { FC } from "react";
import { Close } from "react-ionicons";
import Card from "../Card";
// components
import FlexBox from "../FlexBox";
// local
import useData from "./useData";

interface ITagsField {
  textLabel?: string;
  placeholder?: string;
  onGteTags?: (tags: string[]) => void;
}

export const TagsField: FC<ITagsField> = ({
  textLabel,
  placeholder,
  onGteTags,
}) => {
  const { tags, tagValue, handleRemoveTag, handleChange } = useData({
    onGteTags,
  });

  const renderTags = () => {
    if (tags.length === 0) return null;

    return tags.map((tag, index) => (
      <Card key={index} className="tag-item px-2 ms-3 mt-2 mb-2" isPadding={false}>
        <Close
          cssClasses="text-grey-800 cursor-pointer"
          width="1rem"
          height="1rem"
          onClick={() => handleRemoveTag(index)}
        />
        <span>{tag}</span>
      </Card>
    ));
  };

  return (
    <div>
      {textLabel && <div className="text-grey mb-2 me-1">{textLabel}</div>}
      <FlexBox className="tag-field" alignItems="center" flexWrap="wrap">
        {renderTags()}
        <input
          placeholder={placeholder}
          onChange={handleChange}
          value={tagValue}
        />
      </FlexBox>
    </div>
  );
};

export default TagsField;
