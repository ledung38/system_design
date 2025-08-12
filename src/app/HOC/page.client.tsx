import React from "react";
type Props<K extends string> = {
  children: React.ReactNode;
  sourceName: K;
};
const ContainerClientComp = <K extends string>({
  children,
  sourceName,
}: Props<K>) => {
  const user = { name: "John Doe", age: 30 };

  return (
    <div className="text-3xl text-blue-500 m-auto w-full text-center mt-[50vh]">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [sourceName]: user });
        }
        return child;
      })}
    </div>
  );
};

export default ContainerClientComp;
