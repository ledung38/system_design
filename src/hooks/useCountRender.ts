"use client";
import { useEffect, useRef } from "react";

export function useRenderCount(name = "Component") {
  const count = useRef(1);

  useEffect(() => {
    count.current += 1;
    console.log(`${name} rendered ${count.current} times`);
  });

  return count.current;
}
