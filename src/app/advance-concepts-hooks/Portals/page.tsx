import { PortalsPageClient } from "@/app/advance-concepts-hooks/Portals/page.client";
import React from "react";

export const PortalsPage = () => {
  return (
    <>
      <PortalsPageClient isPortal />
      <PortalsPageClient />
    </>
  );
};
