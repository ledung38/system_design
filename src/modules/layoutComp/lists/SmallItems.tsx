import React from "react";

type Props = {
  author: {
    name: string;
    age: number;
  };
};
export const SmallItems = ({ author }: Props) => {
  return (
    <div className="flex gap-4 items-center ml-5">
      <div className="w-2 h-2 bg-gray-300 rounded-full" />
      <p>{author?.name}</p>
      <p>{author?.age}</p>
    </div>
  );
};
