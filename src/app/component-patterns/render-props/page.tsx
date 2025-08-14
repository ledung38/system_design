"use client";
import { RenderMousePosition } from "@/app/component-patterns/render-props/page.client";
import "../style.css";
import { DisplayMousePosition } from "@/app/component-patterns/hoc/displayMousePosition";

type RenderMousePositionProps = {
  children: (props: { x: number; y: number }) => React.ReactNode;
};

const RenderMousePositionPage = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <RenderMousePosition>
        {({ x, y }) => (
          <DisplayMousePosition x={x} y={y} onMouseMove={() => {}} />
        )}
      </RenderMousePosition>
    </div>
  );
};

export default RenderMousePositionPage;
