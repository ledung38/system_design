"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export const PortalsPageClient = ({ isPortal }: { isPortal?: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => console.log("PortalsPageClient")}
      className="mt-20 relative"
    >
      <button onClick={() => setOpen(true)}>Open</button>
      <Alert open={open} onClose={() => setOpen(false)} isPortal={isPortal} />
    </div>
  );
};

const Alert = ({
  open,
  onClose,
  isPortal,
}: {
  open: boolean;
  isPortal?: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  if (isPortal)
    return createPortal(<Alert onClose={onClose} open={open} />, document.body);
  return (
    <div
      className="p-4 bg-blue-500 absolute top-1 right-1/2 translate-x-1/2"
      onClick={onClose}
    >
      Click me to Close
    </div>
  );
};
