import React, { FunctionComponent } from "react";

import { GridCell } from "../@types/common";

const GameGrid: FunctionComponent<{ generatedGrid: GridCell[] }> = ({ generatedGrid }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[32rem] h-[32rem] grid grid-cols-9 grid-flow-row gap-0 border-zinc-800 border-2">
        {generatedGrid.map((cell, index) => {
          return (
            <div
              key={index}
              className={[
                "text-3xl flex justify-center items-center",
                "border border-slate-300 border-b-1 border-l-0 border-t-0",
                (index + 1) % 9 !== 0 && "border-r-1",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {cell.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameGrid;
