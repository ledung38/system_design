"use client";
import { delay } from "@/utils";
import dynamic from "next/dynamic";
import React, { Suspense, useDeferredValue, useState } from "react";
const CountRenderComp: any = dynamic(
  () =>
    delay(
      import("@/app/advance-concepts-hooks/use-defferred-value/page.client"),
      1000
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const CountRenderCompo: any = dynamic(() =>
  delay(
    import("@/app/advance-concepts-hooks/use-defferred-value/page.client"),
    10000
  )
);
const Page = () => {
  const [valueInput, setValueInput] = useState("");

  const valueDefferred = useDeferredValue(valueInput);

  console.log("valueDefferred", valueDefferred);
  console.log("valueInput", valueInput);

  return (
    <div>
      Page
      <input
        type="text"
        className="border-2 pl-2 ml-2 rounded-md"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <Suspense>
        <CountRenderComp value={valueDefferred || ""} />
      </Suspense>
      <Suspense>
        <CountRenderCompo value={valueDefferred} />
      </Suspense>
      <div style={{ marginTop: 20 }}>
        <p>
          <strong>Giá trị nhập ngay:</strong> {valueInput}
        </p>
        <p>
          <strong>Giá trị bị trì hoãn:</strong> {valueDefferred}
        </p>
      </div>
    </div>
  );
};

export default Page;
