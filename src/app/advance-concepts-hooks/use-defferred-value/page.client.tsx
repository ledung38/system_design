import { useRenderCount } from "@/hooks/useCountRender";
import { memo } from "react";

function CountRenderCompInner({ value }: { value: string }) {
  const renderCount = useRenderCount("CountRenderComp");
  const init = performance.now();
  while (init > performance.now() - 1000) {}

  return (
    <div>
      <p>{value}</p>
      <p>Rendered {renderCount} times</p>
    </div>
  );
}

export const CountRenderComp = memo(CountRenderCompInner);
