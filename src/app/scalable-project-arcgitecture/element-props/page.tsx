"use client";
import { Button } from "@/component/Button";
import { delay } from "@/utils";
import dynamic from "next/dynamic";
import React, { Suspense, useDeferredValue, useState } from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-1/2 m-auto gap-4 mt-5">
      <Button size="sm" />
      <Button size="md" />
      <Button
        size="lg"
        As={"a"}
        href="https://google.com"
        target="_blank"
        text="a"
      />
    </div>
  );
};

export default Page;
