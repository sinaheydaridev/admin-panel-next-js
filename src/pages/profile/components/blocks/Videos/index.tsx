import { FC } from "react";
import { Pencil } from "react-ionicons";
// components
import { EditButton, ListView } from "components/common";
// local

interface IVideos {
  title: string;
  items: { title: string; url: string }[];
}

const Videos: FC<IVideos> = ({ title, items }) => {
  return (
    <div className="py-3 px-2">
      <h5 className="mb-3">{title}</h5>
      <ListView
        className="row"
        items={items}
        renderItem={({ title, url }) => {
          return (
            <div className="col-6">
              <div className="iframe-video-block-container">
                <iframe
                  width="auto"
                  height="auto"
                  className="iframe"
                  src={url}
                ></iframe>
              </div>
              <div className="mt-2">{title}</div>
            </div>
          );
        }}
      />
      <EditButton className="mt-3" icon={<Pencil />}>
        ویرایش بلاک
      </EditButton>
    </div>
  );
};

export default Videos;
