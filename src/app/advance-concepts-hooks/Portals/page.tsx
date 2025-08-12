"use client";
import { PortalsPageClient } from "@/app/advance-concepts-hooks/portals/page.client";
import { delay } from "@/utils";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const CountRenderCompo: any = dynamic(() =>
  delay(
    import("@/app/advance-concepts-hooks/use-defferred-value/page.client"),
    5000
  )
);

const PortalsPage = () => {
  return (
    <>
      {/* <PortalsPageClient isPortal />
      <PortalsPageClient /> */}
      Hard Text
      <Suspense>
        <CountRenderCompo />
      </Suspense>
    </>
  );
};

export default PortalsPage;
