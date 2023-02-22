import { FC } from "react";
import { Add, Pencil } from "react-ionicons";
// components
import { CustomLink, EditButton, FlexBox, ListView } from "components/common";
//utils
import { dateObject } from "utils/date";
// local
import texts from "./texts";

type PostType = {
  title: string;
  date: Date;
  description: string;
};

interface IPosts {
  title: string;
  posts: PostType[];
}

const Posts: FC<IPosts> = ({ title, posts }) => {
  return (
    <div className="mt-4 py-3 px-2">
      <FlexBox justifyContent="space-between">
        <h5 className="mb-3">{title}</h5>
        <CustomLink href="#">
          <FlexBox className="create-text">
            <Add />
            <div>{texts.create_post}</div>
          </FlexBox>
        </CustomLink>
      </FlexBox>
      <ListView
        items={posts}
        renderItem={({ title, date, description }) => {
          return (
            <div className="border-bottom-grey">
              <div className="post-block-item py-2 px-1 my-3">
                <CustomLink href={"#"}>
                  <div className="mb-2 fs-6">{title}</div>
                  <div className="mb-2 fs-7 text-grey">
                    {dateObject.localFormat()}
                  </div>
                  <div className="mb-2 fs-6">{description}</div>
                </CustomLink>
                <EditButton className="mt-3" icon={<Pencil />}>
                  ویرایش بلاک
                </EditButton>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Posts;
