const options: any = {
  mode: "balloon-always",
  buttonList: [
    ["undo", "redo"],
    ["fontSize"],
    ["paragraphStyle", "blockquote"],
    ["bold", "underline", "italic"],
    ["fontColor", "hiliteColor"],
    ["align", "list", "lineHeight"],
    ["outdent", "indent"],

    ["table", "link", "image", "video"],
    // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
    // ['imageGallery'], // You must add the "imageGalleryUrl".
    // ["fullScreen", "showBlocks", "codeView"],
    ["removeFormat"],

    // ['save', 'template'],
    // '/', Line break
  ], // Or Array of button list, eg. [['font', 'align'], ['image']]
  defaultTag: "div",
  minHeight: "300px",
  showPathLabel: false,
};

export default options;
