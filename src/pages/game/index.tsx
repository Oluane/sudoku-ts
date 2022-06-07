import type { NextPage } from "next";

import { GridCell } from "../../@types/common";
import Layout from "../../components/Layout";
import { generateStartingGrid, fillGrid } from "../../utils/generating-grid";

const GamePage: NextPage<{ filledValidGrid: GridCell[] }> = ({ filledValidGrid }) => {
  return (
    <Layout>
      {filledValidGrid.map((cell, index) => {
        return (
          <span key={index}>
            {cell.value ? cell.value : "undefined"} {(index + 1) % 9 === 0 ? <br /> : null}
          </span>
        );
      })}
    </Layout>
  );
};

export async function getServerSideProps() {
  // const generatedGrid = fillGrid(generateStartingGrid());

  return {
    props: {
      filledValidGrid: [
        { row: 1, column: 1, index: 1, value: 7 },
        { row: 1, column: 2, index: 2, value: 3 },
        { row: 1, column: 3, index: 3, value: 2 },
        { row: 1, column: 4, index: 4, value: 6 },
        { row: 1, column: 5, index: 5, value: 4 },
        { row: 1, column: 6, index: 6, value: 8 },
        { row: 1, column: 7, index: 7, value: 5 },
        { row: 1, column: 8, index: 8, value: 1 },
        { row: 1, column: 9, index: 9, value: 9 },
        { row: 2, column: 1, index: 10, value: 5 },
        { row: 2, column: 2, index: 11, value: 9 },
        { row: 2, column: 3, index: 12, value: 4 },
        { row: 2, column: 4, index: 13, value: 7 },
        { row: 2, column: 5, index: 14, value: 2 },
        { row: 2, column: 6, index: 15, value: 1 },
        { row: 2, column: 7, index: 16, value: 8 },
        { row: 2, column: 8, index: 17, value: 6 },
        { row: 2, column: 9, index: 18, value: 3 },
        { row: 3, column: 1, index: 19, value: 8 },
        { row: 3, column: 2, index: 20, value: 6 },
        { row: 3, column: 3, index: 21, value: 1 },
        { row: 3, column: 4, index: 22, value: 9 },
        { row: 3, column: 5, index: 23, value: 5 },
        { row: 3, column: 6, index: 24, value: 3 },
        { row: 3, column: 7, index: 25, value: 2 },
        { row: 3, column: 8, index: 26, value: 4 },
        { row: 3, column: 9, index: 27, value: 7 },
        { row: 4, column: 1, index: 28, value: 9 },
        { row: 4, column: 2, index: 29, value: 2 },
        { row: 4, column: 3, index: 30, value: 6 },
        { row: 4, column: 4, index: 31, value: 4 },
        { row: 4, column: 5, index: 32, value: 7 },
        { row: 4, column: 6, index: 33, value: 5 },
        { row: 4, column: 7, index: 34, value: 3 },
        { row: 4, column: 8, index: 35, value: 8 },
        { row: 4, column: 9, index: 36, value: 1 },
        { row: 5, column: 1, index: 37, value: 3 },
        { row: 5, column: 2, index: 38, value: 8 },
        { row: 5, column: 3, index: 39, value: 7 },
        { row: 5, column: 4, index: 40, value: 1 },
        { row: 5, column: 5, index: 41, value: 9 },
        { row: 5, column: 6, index: 42, value: 6 },
        { row: 5, column: 7, index: 43, value: 4 },
        { row: 5, column: 8, index: 44, value: 5 },
        { row: 5, column: 9, index: 45, value: 2 },
        { row: 6, column: 1, index: 46, value: 4 },
        { row: 6, column: 2, index: 47, value: 1 },
        { row: 6, column: 3, index: 48, value: 5 },
        { row: 6, column: 4, index: 49, value: 8 },
        { row: 6, column: 5, index: 50, value: 3 },
        { row: 6, column: 6, index: 51, value: 2 },
        { row: 6, column: 7, index: 52, value: 7 },
        { row: 6, column: 8, index: 53, value: 9 },
        { row: 6, column: 9, index: 54, value: 6 },
        { row: 7, column: 1, index: 55, value: 6 },
        { row: 7, column: 2, index: 56, value: 7 },
        { row: 7, column: 3, index: 57, value: 9 },
        { row: 7, column: 4, index: 58, value: 2 },
        { row: 7, column: 5, index: 59, value: 8 },
        { row: 7, column: 6, index: 60, value: 4 },
        { row: 7, column: 7, index: 61, value: 1 },
        { row: 7, column: 8, index: 62, value: 3 },
        { row: 7, column: 9, index: 63, value: 5 },
        { row: 8, column: 1, index: 64, value: 1 },
        { row: 8, column: 2, index: 65, value: 4 },
        { row: 8, column: 3, index: 66, value: 3 },
        { row: 8, column: 4, index: 67, value: 5 },
        { row: 8, column: 5, index: 68, value: 6 },
        { row: 8, column: 6, index: 69, value: 7 },
        { row: 8, column: 7, index: 70, value: 9 },
        { row: 8, column: 8, index: 71, value: 2 },
        { row: 8, column: 9, index: 72, value: 8 },
        { row: 9, column: 1, index: 73, value: 2 },
        { row: 9, column: 2, index: 74, value: 5 },
        { row: 9, column: 3, index: 75, value: 8 },
        { row: 9, column: 4, index: 76, value: 3 },
        { row: 9, column: 5, index: 77, value: 1 },
        { row: 9, column: 6, index: 78, value: 9 },
        { row: 9, column: 7, index: 79, value: 6 },
        { row: 9, column: 8, index: 80, value: 7 },
        { row: 9, column: 9, index: 81, value: 4 },
      ],
    },
  };
}

export default GamePage;
