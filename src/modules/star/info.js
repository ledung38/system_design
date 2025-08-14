"use client";
import React, { useMemo, useState } from "react";
import { randomExpensiveOperation } from "./utils/expensive-operation";
export const Info = React.memo(
  function Info(props) {
    const [exapnded, setExpanded] = useState(false);
    const Stars = Object.values(props.Stars);

    const distances = useMemo(() => {
      const distanceCalc = { max: 0, min: 1000 };

      Stars.forEach((currentStar) => {
        // emulator for expensive operation
        // randomExpensiveOperation();
        Stars.forEach((compareStar) => {
          if (compareStar === currentStar) {
            return;
          }

          distanceCalc.max = Math.max(
            distanceCalc.max,
            Math.max(Number(currentStar.age), Number(compareStar.age))
          );
          distanceCalc.min = Math.min(
            distanceCalc.min,
            Math.min(Number(currentStar.age), Number(compareStar.age))
          );
        });
      });

      return distanceCalc;
    }, [Stars.length]);

    const expandHandler = () => setExpanded(!exapnded);

    return (
      <div className={exapnded ? "bar" : "board"}>
        <div>You have {Object.keys(props.Stars).length} stars!</div>
        <div>Age of the oldest star: {distances.max}</div>
        <div>Age of the youngest star: {distances.min}</div>
        <span className="expand" onClick={expandHandler}>
          ◤ ◥
        </span>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      Object.keys(prevProps.Stars).length ===
      Object.keys(nextProps.Stars).length
    );
  }
);
