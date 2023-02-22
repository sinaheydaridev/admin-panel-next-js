import { FC } from "react";
import { Pencil } from "react-ionicons";
// components
import { Card, CustomLink, EditButton, ListView } from "components/common";

interface ILinks {
  title: string;
  links: { title: string; url: string }[];
}

const Links: FC<ILinks> = ({ title, links }) => {
  return (
    <div className="mt-4 py-3 px-2">
      <h5>{title}</h5>
      <ListView
        items={links}
        renderItem={({ title, url }) => {
          return (
            <CustomLink href={url}>
              <Card className="link-block-item p-3 mt-3" key={Math.random()}>
                {title}
              </Card>
            </CustomLink>
          );
        }}
      />
      <EditButton className="mt-3" icon={<Pencil />}>
        ویرایش بلاک
      </EditButton>
    </div>
  );
};

export default Links;
