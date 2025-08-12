import React from "react";

export const DelayComponent = ({ count = 100 }: { count: number }) => {
  const init = performance.now();
  while (init > performance.now() - count) {}
  return <div>DelayComponent</div>;
};
