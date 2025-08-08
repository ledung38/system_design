import { DelayComponent } from "@/component/delay";
import { memo } from "react";

function ListClientPageDelayComp({ value = 100 }: { value: number }) {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => {
        return <DelayComponent key={index} count={value} />;
      })}
    </div>
  );
}

export const ListClientPageDelay = memo(ListClientPageDelayComp);
