import { FC, useEffect } from "react";
import classNames from "classnames";
import { CloseOutline } from "react-ionicons";
// hooks
import useQuickView from "hooks/useQuickView";
// components
import Backdrop from "../Backdrop";
import FlexBox from "../FlexBox";
import Touch from "../Touch";
import Scrollbar from "../Scrollbar";
import Card from "../Card";
// utils
import { disableBodyScroll, enableBodyScroll } from "utils/main";

interface IModal {
  children: React.ReactNode;
  id: string;
  wrapperClassName?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: FC<IModal> = ({
  children,
  id,
  wrapperClassName,
  title = "Title",
  footer,
}) => {
  const { config, setConfig } = useQuickView();
  const rootClasses = classNames("custom-modal", {
    open: config.id === id && config.isOpen,
    close: !(config.id === id && config.isOpen),
  });

  useEffect(() => {
    if (config.isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [config.isOpen]);

  return (
    <>
      <Backdrop
        onClick={() => setConfig({ id: "", isOpen: false })}
        isOpen={config.isOpen}
      />
      <div className={rootClasses}>
        <FlexBox justifyContent="center" className="main-card">
          <Card
            className={classNames("wrapper", wrapperClassName)}
            variant="white"
            isPadding={false}
          >
            <header className="header border-bottom-grey px-3">
              <FlexBox
                className="h-100"
                alignItems="center"
                justifyContent="space-between"
              >
                <div className="fs-5">{title}</div>
                <Touch onClick={() => setConfig({ id: "", isOpen: false })}>
                  <CloseOutline />
                </Touch>
              </FlexBox>
            </header>
            <Scrollbar className="content px-4 py-3">{children}</Scrollbar>
            {/* <FlexBox className="footer px-2" alignItems="center">
            <footer className="w-100">{footer}</footer>
          </FlexBox> */}
          </Card>
        </FlexBox>
      </div>
    </>
  );
};

export default Modal;
