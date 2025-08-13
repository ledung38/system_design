"use client";
import { useMousePosition } from "@/hooks/useMousePosition";

const TrackMouse = (props) => {
  const position = useMousePosition({ throttleTime: 2000 });

  return (
    <div>
      Last mouse position - x: {position.x}, y: {position.y}
    </div>
  );
};

export default TrackMouse;
