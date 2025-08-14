"use client";
import { getPosition } from "@/app/component-patterns/get-pos";
import React, { MouseEventHandler, useCallback, useState } from "react";

export const useMouseEvent = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback<MouseEventHandler>(
    (event) => {
      const { x, y } = getPosition(event);
      setPosition({ x, y });
    },
    [setPosition]
  );
  return { x, y, onMouseMove };
};
