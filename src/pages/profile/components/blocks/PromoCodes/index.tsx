import { FC } from "react";
import { Pencil } from "react-ionicons";
// components
import { Card, CustomLink, EditButton, FlexBox, ListView } from "components/common";

type PromoCodeType = {
  name: string;
  affiliateLink: string;
  discount: string;
  code: string;
};

interface IPromoCode {
  title: string;
  codes: PromoCodeType[];
}

const PromoCode: FC<IPromoCode> = ({ title, codes }) => {
  return (
    <div className="mt-4 py-3 px-2">
      <h5>{title}</h5>
      <ListView
        className="row"
        items={codes}
        renderItem={({ name, affiliateLink, discount, code }) => {
          return (
            <div className="col-sm-7">
              <CustomLink href={affiliateLink}>
                <Card
                  className="row link-block-item mt-3"
                  key={Math.random()}
                >
                  <FlexBox className="border-bottom-grey pb-2">
                    <div className="col-6">{name}</div>
                    <div className="col-6">{discount}</div>
                  </FlexBox>
                  <div className="pt-2">
                    <span className="ms-2">کد</span>
                    <span>{code}</span>
                  </div>
                </Card>
              </CustomLink>
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

export default PromoCode;
