import dynamic from "next/dynamic";
import React from "react";
// css
import "suneditor/dist/css/suneditor.min.css";
// local
import options from "./options";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

const ReachEditor = () => {
  return (
    <div className="rich-editor">
      <SunEditor
        setDefaultStyle="font-family: Yekan sans-serif; font-size: 1.2rem;"
        setOptions={options}
      />
    </div>
  );
};

export default ReachEditor;
