"use client";
import { DisplayMousePosition } from "@/app/component-patterns/hoc/displayMousePosition";
import withMouseMove from "@/app/component-patterns/hoc/withPosition";
import { Button } from "@/component/Button";
import { delay } from "@/utils";
import dynamic from "next/dynamic";
import React, { Suspense, useDeferredValue, useState } from "react";

const Page = () => {
  const Comp = withMouseMove(DisplayMousePosition);
  return (
    <div className="w-[100vw] h-[100vh]">
      <Comp />
    </div>
  );
};

export default Page;
