const Panel = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1">{children}</div>;
};

export const Splitter = ({ children }: { children?: React.ReactNode[] }) => {
  return (
    <div className="flex h-screen">
      {children &&
        children?.map((child, index) => <Panel key={index}>{child}</Panel>)}
    </div>
  );
};
