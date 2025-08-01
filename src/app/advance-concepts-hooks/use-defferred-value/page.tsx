"use client";
import { CountRenderComp } from "@/app/advance-concepts-hooks/use-defferred-value/page.client";
import React, { useDeferredValue, useState } from "react";

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
      <CountRenderComp value={valueDefferred} />
    </div>
  );
};

export default Page;
