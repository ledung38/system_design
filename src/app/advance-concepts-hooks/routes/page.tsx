"use client";
import { ListClientPageDelay } from "@/app/advance-concepts-hooks/use-transition/page.client";
import Link from "next/link";
import React, { useState, useTransition } from "react";

const Page = () => {
  return (
    <div className="p-10">
      <div className="flex gap-4">
        <Link href="/advance-concepts-hooks">root</Link>
        <Link href="/advance-concepts-hooks/use-transition">
          use-transition
        </Link>
        <Link href="/advance-concepts-hooks/use-defferred-value">
          use-defferred-value
        </Link>
        <Link href="/advance-concepts-hooks/use-callback-as-ref">
          use-callback-as-ref
        </Link>
        <Link href="/advance-concepts-hooks/routes">routes</Link>
        <Link href="/advance-concepts-hooks/portals">portals</Link>
        <Link href="/advance-concepts-hooks/error-boundary">
          error-boundary
        </Link>
      </div>
    </div>
  );
};

export default Page;
