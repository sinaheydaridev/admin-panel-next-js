import { useState } from "react";

const useData = ({
  onGteTags,
}: {
  onGteTags?: (tags: string[]) => void;
}) => {
  const [tags, setTags] = useState<string[]>([]);

  const [tagValue, setTagValue] = useState("");

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reWhiteSpace = new RegExp(/\s/g);
    const value = e.target.value;
    if (value.length > 0) {
      setTagValue(value.trim());
    } else {
      setTagValue(value);
    }
    if (tagValue.trim() !== "" && reWhiteSpace.test(value)) {
      setTags([...tags, tagValue.toLowerCase()]);
      setTagValue("".trim());
    }
    onGteTags && onGteTags(tags)
  };

  return { tags, tagValue, handleRemoveTag, handleChange };
};

export default useData;
