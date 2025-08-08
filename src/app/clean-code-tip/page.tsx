"use client";
import { ListClientPageDelay } from "@/app/advance-concepts-hooks/use-transition/page.client";
import Link from "next/link";
import React, { useState, useTransition } from "react";

const Page = () => {
  return (
    <div className="p-10">
      <div className="flex gap-4">
        <Link href="/clean-code-tip">root</Link>
        <Link href="/clean-code-tip/element-props">element-props</Link>
      </div>
    </div>
  );
};

export default Page;
