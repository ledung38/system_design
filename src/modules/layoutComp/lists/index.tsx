import React from "react";

type RegularListProps = {
  items: any[];
  sourceName: string;
  ItemComp: any;
};
export const RegularList = ({
  items,
  sourceName,
  ItemComp,
}: RegularListProps) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComp key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
