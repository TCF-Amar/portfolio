import React from "react";

const TickMarks = ({ start = 32, end = 144, gap = 3.2, majorTickInterval = 5 }) => {
  const count = Math.floor((end - start) / gap) + 1;

  const ticks = Array.from({ length: count }, (_, i) => {
    const top = start + i * gap;
    const isMajor = i % majorTickInterval === 0;
    return { top, width: isMajor ? 15 : 10 };
  });

  return (
    <>
      {ticks.map((tick, i) => (
        <div
          key={i}
          className="absolute right-0 h-[1px] bg-black"
          style={{
            top: `${tick.top}px`,
            width: `${tick.width}px`,
          }}
        />
      ))}
    </>
  );
};

export default TickMarks;
