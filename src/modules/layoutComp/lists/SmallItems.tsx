import React from "react";

type Props = {
  author?: Author;
};
type Author = {
  name: string;
  age: number;
};
export const SmallItems = ({ author }: Props) => {
  return (
    <div className="flex gap-4 items-center ml-5">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      <p className="text-lg ">{author?.name}</p>
      <p className="text-lg ">{author?.age}</p>
    </div>
  );
};
