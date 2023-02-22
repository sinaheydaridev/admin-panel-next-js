export const range = (start = 0, end: number) => {
  return new Array(end - start + 1).fill(undefined).map((_, i) => i + start);
};

export const enableBodyScroll = () => {
  document.body.style.overflowY = "auto";
};

export const disableBodyScroll = () => {
  document.body.style.overflowY = "hidden";
};
