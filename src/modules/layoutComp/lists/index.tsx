type RegularListProps<T, K extends string> = {
  items: T[];
  sourceName: K;
  ItemComp: React.ComponentType<{ [key in K]: T }>;
};

export const RegularList = <T, K extends string>({
  items,
  sourceName,
  ItemComp,
}: RegularListProps<T, K>) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <ItemComp {...({ [sourceName]: item } as { [key in K]: T })} />
        </div>
      ))}
    </>
  );
};
