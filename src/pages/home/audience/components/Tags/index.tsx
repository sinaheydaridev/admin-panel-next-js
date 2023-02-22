import {
  Button,
  FlexBox,
  Modal,
  SectionRow,
  TextField,
} from "components/common";
import { Pencil, Trash } from "react-ionicons";
// hooks
import useQuickView from "hooks/useQuickView";
// components
import TagTheme from "./components/TagTheme";
// locals
import texts from "./texts";

const Tags = () => {
  const { setConfig } = useQuickView();

  const renderEditModel = () => {
    return (
      <Modal id="editModel" title="تغییر تگ">
        <TextField textLabel="نام" fullWidth />
        <div className="mt-4">
          <TagTheme />
        </div>
        <FlexBox className="mt-3" justifyContent="space-between">
          <Button color="dark">{texts.update_tag}</Button>
          <Button variant="none" color="dark" icon={<Trash />}>
            {texts.delete}
          </Button>
        </FlexBox>
      </Modal>
    );
  };

  return (
    <SectionRow
      header={{
        title: texts.audience_tags,
        subtitle: texts.audience_tags_description,
      }}
    >
      <FlexBox
        className="border-grey p-3 rounded"
        justifyContent="space-between"
      >
        <div>test test</div>
        <Pencil
          onClick={() => setConfig({ id: "editModel", isOpen: true })}
          cssClasses="cursor-pointer"
          width="1rem"
          height="1rem"
        />
      </FlexBox>
      {renderEditModel()}
    </SectionRow>
  );
};

export default Tags;
