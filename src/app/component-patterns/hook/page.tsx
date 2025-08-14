"use client";
import { useMouseEvent } from "@/app/component-patterns/hook/useMouseEvent";
import React from "react";
import "../style.css";

const page = () => {
  const { x, y, onMouseMove } = useMouseEvent();
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="relative-container" onMouseMove={onMouseMove}>
        <section className="absolute-section">
          <p>
            <span className="bold-span">X</span>: {x}
          </p>
          <p>
            <span className="bold-span">Y</span>: {y}
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
