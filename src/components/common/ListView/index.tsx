interface IListView<T> {
  items: T[];
  className?: string;
  renderItem: (item: T) => React.ReactNode;
}

const ListView = <T extends {}>({
  items,
  renderItem,
  className,
}: IListView<T>) => {
  const renderItems = () => {
    if (items.length < 0) {
      return null;
    }
    return items.map((item) => renderItem(item));
  };

  return (
    <div className={className}>
      {renderItems()}
    </div>
  );
};

export default ListView;
