"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    throw new Error("error");
  }, []);
};

export default Page;
