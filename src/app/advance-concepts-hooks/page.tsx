import PortalsPage from "@/app/advance-concepts-hooks/portals/page";
import { delay } from "@/utils";
import React, { Suspense } from "react";

const Page = async () => {
  const value = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 11));
    }, 10000); // 10 giây
  });

  if (value % 2 === 0) return <>null</>;
  return (
    <>
      <PortalsPage />
    </>
  );
};

export default Page;

export const dynamic = "force-dynamic";

export const revalidate = 0;

export const fetchCache = "force-no-store";
