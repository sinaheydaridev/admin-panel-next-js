import classNames from "classnames";
import dynamic from "next/dynamic";
import { arrayMove, IProps } from "react-movable";
// components
import Card from "../Card";
// locals
import useActions from "./useActions";

const List = dynamic<IProps<any>>(() => import("react-movable").then((cmp) => cmp.List), {
  ssr: false,
});

const HorizontalDraggable: React.FC = () => {
  const { items, setItems } = useActions();

  const renderCardItem = (
    value: any,
    props: any,
    isDragged: boolean,
    isSelected: boolean
  ) => {
    return (
      <div
        key={Math.random()}
        {...props}
        style={{
          ...props.style,
          zIndex: 1000,
        }}
        className="my-3"
      >
        <Card
          className={classNames(
            "horizontal-draggable-card",
            { "cursor-grabbing": isDragged },
            { "cursor-grab": !isDragged },
            { selected: isDragged || isSelected }
          )}
          variant="white"
        >
          <div
            className={classNames({ "text-white": isDragged || isSelected })}
          >
            {value.title}
          </div>
          <div
            className={classNames("fs-7", {
              "text-white": isDragged || isSelected,
              "text-grey": !(isDragged || isSelected),
            })}
          >
            {value.subTitle}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
      }}
      renderList={({ children, props, isDragged }) => (
        <ul className="p-0 m-0" {...props}>
          {children}
        </ul>
      )}
      renderItem={({ value, props, isDragged, isSelected }) =>
        renderCardItem(value, props, isDragged, isSelected)
      }
      lockVertically={false}
      removableByMove={false}
      transitionDuration={400}
      voiceover={{
        canceled: () => "",
        dropped: () => "",
        item: () => "",
        lifted: () => "",
        moved: () => "",
      }}
    />
  );
};

export default HorizontalDraggable;
