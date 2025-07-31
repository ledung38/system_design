import React from "react";

type Props = {
  author?: {
    name: string;
    age: number;
  };
};
export const LagerItems = ({ author }: Props) => {
  return (
    <div className="flex gap-4 items-center ml-5">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      <p className="font-bold text-main text-2xl">{author?.name}</p>
      <p className="font-bold text-2xl">{author?.age}</p>
    </div>
  );
};
