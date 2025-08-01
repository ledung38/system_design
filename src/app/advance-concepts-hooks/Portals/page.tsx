import { PortalsPageClient } from "@/app/advance-concepts-hooks/portals/page.client";
import React from "react";

const PortalsPage = () => {
  return (
    <>
      <PortalsPageClient isPortal />
      <PortalsPageClient />
    </>
  );
};

export default PortalsPage;
