import { FC, forwardRef, useEffect, useRef } from "react";
import classNames from "classnames";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";
// components
import FlexBox from "../FlexBox";
import Card from "../Card";

interface ITabs {
  className?: string;
  variant?: "primary" | "card";
  tabList: string[];
  tabPanelList: React.ReactNode[];
  ref?: any;
}

const Tabs: FC<ITabs> = forwardRef(
  (
    { className = "", variant = "primary", tabList, tabPanelList = [] },
    ref
  ) => {
    const tabContentsRef = useRef<HTMLDivElement>(null);
    const rootClasses = classNames(
      {
        "primary-tab": variant === "primary",
        "card-tab": variant === "card",
      },
      className
    );

    useEffect(() => {
      const r = ref as any;
      const tabContentsContainerTag = r?.current as HTMLDivElement;
      const tabContentsTag = tabContentsRef?.current as HTMLDivElement;
      if (tabContentsContainerTag) {
        tabContentsContainerTag.appendChild(tabContentsTag);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderPrimary = () => {
      return (
        <ReactTabs className={rootClasses}>
          <TabList className="border-bottom-grey">
            <FlexBox className="header">
              {tabList.map((item, index) => (
                <Tab className="ms-3 cursor-pointer" key={index}>
                  {item}
                </Tab>
              ))}
            </FlexBox>
          </TabList>
          {ref ? (
            <div ref={tabContentsRef} className="mt-3">
              {tabPanelList.map((item, index) => (
                <TabPanel key={index}>{item}</TabPanel>
              ))}
            </div>
          ) : (
            <div className="mt-3">
              {tabPanelList.map((item, index) => (
                <TabPanel key={index}>{item}</TabPanel>
              ))}
            </div>
          )}
        </ReactTabs>
      );
    };

    const renderCard = () => {
      return (
        <ReactTabs className={rootClasses}>
          <TabList>
            <FlexBox className="card-tab-header w-auto">
              {tabList.map((item, index) => (
                <Tab className="ms-3 cursor-pointer" key={index}>
                  {item}
                </Tab>
              ))}
            </FlexBox>
          </TabList>
          {ref ? (
            <div ref={tabContentsRef} className="mt-3">
              {tabPanelList.map((item, index) => (
                <TabPanel key={index}>{item}</TabPanel>
              ))}
            </div>
          ) : (
            <div className="mt-3">
              {tabPanelList.map((item, index) => (
                <TabPanel key={index}>{item}</TabPanel>
              ))}
            </div>
          )}
        </ReactTabs>
      );
    };

    return (
      <>
        {variant === "primary" && renderPrimary()}
        {variant === "card" && renderCard()}
      </>
    );
  }
);

Tabs.displayName = "";

export default Tabs;
