"use client";
import { ListClientPageDelay } from "@/app/advance-concepts-hooks/use-transition/page.client";
import Link from "next/link";
import React, { useState, useTransition } from "react";

const Page = () => {
  return (
    <div className="p-10">
      <div className="flex gap-4">
        <Link href="/component-patterns">root</Link>
        <Link href="/component-patterns/hoc">hoc</Link>
        <Link href="/component-patterns/render-props">render-props</Link>
        <Link href="/component-patterns/hook">hook</Link>
      </div>
    </div>
  );
};

export default Page;
