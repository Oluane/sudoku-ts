import type { NextPage } from "next";

import { GridCell } from "../../@types/common";
import { generateStartingGrid, fillGrid } from "../../utils/generating-grid";

const GamePage: NextPage<{ filledValidGrid: GridCell[] }> = ({ filledValidGrid }) => {
  return (
    <>
      {filledValidGrid.map((cell, index) => {
        return (
          <span key={index}>
            {cell.value ? cell.value : "undefined"} {(index + 1) % 9 === 0 ? <br /> : null}
          </span>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const generatedGrid = fillGrid(generateStartingGrid());

  return { props: { filledValidGrid: generatedGrid } };
}

export default GamePage;
