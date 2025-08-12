"use client";
import { ColorProvider } from "@/component/custom/context/context";
import { PropsWithChildren } from "react";

const LayoutTemplate = ({ children }: PropsWithChildren) => {
  return <ColorProvider>{children}</ColorProvider>;
};

export default LayoutTemplate;
