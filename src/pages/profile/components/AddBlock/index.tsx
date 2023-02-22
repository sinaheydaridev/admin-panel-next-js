import { Add, ChevronBack, Trash } from "react-ionicons";
// components
import { Card, EditButton, FlexBox, Modal, TextField } from "components/common";
// local
import texts from "./texts";
import useActions from "./useActions";

const AddBlock = () => {
  const {
    route,
    links,
    money,
    promoCodes,
    setRoute,
    handleAddNewLink,
    handleRemoveLink,
    handleChangeLink,
    handleAddNewMoney,
    handleRemoveMoney,
    handleChangeMoney,
    handleAddNewPromoCode,
    handleRemovePromoCode,
    handleChangePromoCode,
  } = useActions();

  // ========================================================
  // ===================> Routes <======================
  // ========================================================

  const renderCollectEmails = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-2">
          <TextField
            textLabel="پیام"
            placeholder="به بازدیدکنندگان بگویید که چرا باید مشترک شوند."
            fullWidth
            multiline
          />
        </div>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-3 mb-3">
          {links.map(({ id }) => (
            <FlexBox key={id} className="link-field mt-3" alignItems="center">
              <div className="w-100 p-2">
                <div className="border-bottom-grey">
                  <input
                    placeholder="عنوان لینک را وارد کنید"
                    onChange={(e) =>
                      handleChangeLink(id, "title", e.target.value)
                    }
                    className="pb-2"
                  />
                </div>
                <div>
                  <input
                    placeholder="url لینک را وارد کنید"
                    onChange={(e) =>
                      handleChangeLink(id, "url", e.target.value)
                    }
                    className="fs-7 pt-2"
                  />
                </div>
              </div>
              <div
                className="me-1 ms-1 cursor-pointer"
                onClick={() => handleRemoveLink(id)}
              >
                <Trash cssClasses="text-grey" width="1rem" height="1rem" />
              </div>
            </FlexBox>
          ))}
        </div>
        <Card
          className="profile-link text-grey mt-3"
          onClick={handleAddNewLink}
        >
          <FlexBox justifyContent="center">
            <Add cssClasses="text-grey" />
            <span>{texts.add_new_link}</span>
          </FlexBox>
        </Card>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderMoney = () => {
    const renderCurrencyIcon = () => {
      return <>$</>;
    };
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-3 mb-3">
          {money.map(({ id }) => (
            <FlexBox
              key={id}
              className="mt-3"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                type="number"
                placeholder=""
                icon={renderCurrencyIcon()}
                onChange={(e) => handleChangeMoney(id, e.target.value)}
              />
              <div
                className="me-1 ms-1 cursor-pointer"
                onClick={() => handleRemoveMoney(id)}
              >
                <Trash cssClasses="text-grey" width="1rem" height="1rem" />
              </div>
            </FlexBox>
          ))}
        </div>
        <Card
          className="profile-link text-grey mt-3"
          onClick={handleAddNewMoney}
        >
          <FlexBox justifyContent="center">
            <Add cssClasses="text-grey" />
            <span>{texts.add_option}</span>
          </FlexBox>
        </Card>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderVideos = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-3 mb-3">
          {links.map(({ id }) => (
            <FlexBox key={id} className="link-field mt-3" alignItems="center">
              <div className="w-100 p-2">
                <div className="border-bottom-grey">
                  <input
                    placeholder="عنوان ویدیو وارد کنید"
                    onChange={(e) =>
                      handleChangeLink(id, "title", e.target.value)
                    }
                    className="pb-2"
                  />
                </div>
                <div>
                  <input
                    placeholder="url ویدیو یوتیوب"
                    onChange={(e) =>
                      handleChangeLink(id, "url", e.target.value)
                    }
                    className="fs-7 pt-2"
                  />
                </div>
              </div>
              <div
                className="me-1 ms-1 cursor-pointer"
                onClick={() => handleRemoveLink(id)}
              >
                <Trash cssClasses="text-grey" width="1rem" height="1rem" />
              </div>
            </FlexBox>
          ))}
        </div>
        <Card
          className="profile-link text-grey mt-3"
          onClick={handleAddNewLink}
        >
          <FlexBox justifyContent="center">
            <Add cssClasses="text-grey" />
            <span>{texts.add_new_link}</span>
          </FlexBox>
        </Card>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderTexts = () => {
    return (
      <div>
        <div className="mt-2">
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-2">
          <TextField
            textLabel="پیام"
            placeholder="پیام خود را اینجا بنویسید"
            fullWidth
            multiline
            rows={3}
          />
        </div>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderPromoCodes = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <div className="mt-3 mb-3">
          {promoCodes.map(({ id }) => (
            <Card className="mt-3" key={id}>
              <FlexBox className="link-field" alignItems="center">
                <div className="w-100 p-2">
                  <div className="border-bottom-grey">
                    <input
                      placeholder="نام یا فروشگاه یا آیتم"
                      onChange={(e) =>
                        handleChangePromoCode(id, "name", {
                          name: e.target.value,
                        })
                      }
                      className="pb-2"
                    />
                  </div>
                  <div className="border-bottom-grey">
                    <input
                      placeholder="لینک وابسته یا آدرس فروشگاه"
                      onChange={(e) =>
                        handleChangePromoCode(id, "affiliate", {
                          affiliate: e.target.value,
                        })
                      }
                      className="pb-2"
                    />
                  </div>
                  <div className="border-bottom-grey">
                    <input
                      placeholder="تخفیف"
                      onChange={(e) =>
                        handleChangePromoCode(id, "discount", {
                          discount: e.target.value,
                        })
                      }
                      className="pb-2"
                    />
                  </div>
                  <div className="border-bottom-grey">
                    <input
                      placeholder="کد"
                      onChange={(e) =>
                        handleChangePromoCode(id, "code", {
                          code: e.target.value,
                        })
                      }
                      className="pb-2"
                    />
                  </div>
                </div>
                <div
                  className="me-1 ms-1 cursor-pointer"
                  onClick={() => handleRemovePromoCode(id)}
                >
                  <Trash cssClasses="text-grey" width="1rem" height="1rem" />
                </div>
              </FlexBox>
            </Card>
          ))}
        </div>
        <Card
          className="profile-link text-grey mt-3"
          onClick={handleAddNewPromoCode}
        >
          <FlexBox justifyContent="center">
            <Add cssClasses="text-grey" />
            <span>{texts.add_new_link}</span>
          </FlexBox>
        </Card>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderCreditPacks = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  const renderPosts = () => {
    return (
      <div>
        <div>
          <TextField
            textLabel="عنوان"
            placeholder="عنوان بلاک را وارد کنید"
            fullWidth
          />
        </div>
        <EditButton className="block-btn mt-3" fullWidth>
          {texts.add_block}
        </EditButton>
      </div>
    );
  };

  // ========================================================
  // ===================> Option Rows <======================
  // ========================================================

  const renderOptions = () => {
    return (
      <div className="row">
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({
                path: "collectEmails",
                title: "بلاک جمع آوری ایمیل ها را اضافه کنید",
              })
            }
          >
            {texts.collect_emails}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({ path: "links", title: "افزودن بلاک پیوندها" })
            }
          >
            {texts.links}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({ path: "videos", title: "افزودن بلاک ویدیو" })
            }
          >
            {texts.videos}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({ path: "money", title: "افزودن بلاک پول" })
            }
          >
            {texts.money}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({
                path: "promoCodes",
                title: "افزودن بلاک کدهای تبلیغاتی",
              })
            }
          >
            {texts.promo_codes}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({ path: "text", title: "افزودن بلاک متن ها" })
            }
          >
            {texts.text}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({
                path: "creditPacks",
                title: "افزودن بلاک بسته های اعتباری",
              })
            }
          >
            {texts.credit_packs}
          </FlexBox>
        </div>
        <div className="col-6 mb-3">
          <FlexBox
            className="add-block-element px-2 rounded"
            alignItems="center"
            onClick={() =>
              setRoute({ path: "posts", title: "افزودن بلاک پست ها" })
            }
          >
            {texts.posts}
          </FlexBox>
        </div>
      </div>
    );
  };

  return (
    <Modal id="block" title="اضافه کردن بلوک جدید">
      <FlexBox justifyContent="space-between">
        <div className="mb-3">{route.title}</div>
        {route.path !== undefined && (
          <div
            className="cursor-pointer"
            onClick={() =>
              setRoute({
                path: undefined,
                title: "چه نوع بلاکی را می خواهید اضافه کنید؟",
              })
            }
          >
            <ChevronBack width="1rem" height="1rem" />
          </div>
        )}
      </FlexBox>
      {route.path === undefined && renderOptions()}
      {route.path === "collectEmails" && renderCollectEmails()}
      {route.path === "links" && renderLinks()}
      {route.path === "videos" && renderVideos()}
      {route.path === "money" && renderMoney()}
      {route.path === "promoCodes" && renderPromoCodes()}
      {route.path === "text" && renderTexts()}
      {route.path === "creditPacks" && renderCreditPacks()}
      {route.path === "posts" && renderPosts()}
    </Modal>
  );
};
export default AddBlock;
