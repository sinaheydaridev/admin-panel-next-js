import { FC } from "react";
import Head from "next/head";
// components
import { FlexBox } from "components/common";
// constants
import globalTexts from "constants/globalTexts";

interface IPageSection {
  children: React.ReactNode;
  pageTitle: string;
  titleText?: string;
  titleElement?: React.ReactNode;
  meta?: React.ReactNode;
}

const PageSection: FC<IPageSection> = ({
  pageTitle,
  titleText,
  titleElement,
  meta,
  children,
}) => {
  return (
    <section>
      <Head>
        <title>{pageTitle}</title>
        {meta}
      </Head>
      <FlexBox alignItems="center">{titleText && <h2>{titleText}</h2>}</FlexBox>
      {titleElement && titleElement}
      <div className="mt-2">{children}</div>
    </section>
  );
};

export default PageSection;
