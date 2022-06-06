import { GridCell } from "../@types/common";
import { calculateRegionStartingRowOrColumn, shuffle } from "./helpers";

const findCurrentRegionCells = (startingGrid: GridCell[], currentCell: GridCell) => {
  const regionStartingRow = calculateRegionStartingRowOrColumn(currentCell.row);
  const regionStartingColumn = calculateRegionStartingRowOrColumn(currentCell.column);
  const regionTopLeftCell =
    startingGrid.find((cell) => cell.row === regionStartingRow && cell.column === regionStartingColumn) ||
    ({} as GridCell);
  const regionCellsIndexes = new Array(9).fill(0).map((_, index) => {
    const iterationGroup = Math.floor(index / 3);
    return regionTopLeftCell.index + 9 * iterationGroup + (index % 3);
  });

  return regionCellsIndexes.map(
    (indexValue) => startingGrid.find((cell) => cell.index === indexValue) || ({} as GridCell),
  );
};

const isNumberPlacementValid = (startingGrid: GridCell[], currentCell: GridCell, number: number) => {
  const currentRowCells = startingGrid.filter((cell) => cell.row === currentCell.row);
  const currentColumnCells = startingGrid.filter((cell) => cell.column === currentCell.column);
  const concernedCells = Array.from(
    new Set([...currentRowCells, ...currentColumnCells, ...findCurrentRegionCells(startingGrid, currentCell)]),
  );

  return !concernedCells.some((cell) => cell.value === number);
};

const generateStartingGrid = () => {
  const startingBoard = new Array(81).fill({}).map((_, index) => {
    const augmentedIndex = index + 1;

    const calculatedRow = Math.ceil(augmentedIndex / 9);
    const calculatedColumn = augmentedIndex - Math.ceil(augmentedIndex / 9) * 9 + 9;

    return {
      row: calculatedRow,
      column: calculatedColumn,
      index: augmentedIndex,
      value: null,
    };
  });

  return startingBoard;
};

const numberArray = new Array(9).fill(0).map((_, index) => index + 1);

const fillGrid = (startingGrid: GridCell[]) => {
  const filledBoardRows = new Array(9).fill(0).map((_, index) => startingGrid.filter((cell) => cell.row === index + 1));

  for (let iRow = 0; iRow < filledBoardRows.length; iRow++) {
    filledBoardRows[iRow] = fillRow(filledBoardRows, iRow);
  }
  return filledBoardRows.flat();
};

const fillRow = (grid: GridCell[][], currentRowIndex: number): GridCell[] => {
  const shuffledNumArray = shuffle(numberArray);

  const currentGrid = [...grid];

  currentGrid[currentRowIndex] = currentGrid[currentRowIndex].map((cell) => {
    return { ...cell, value: null } as GridCell;
  });

  for (const cell of currentGrid[currentRowIndex]) {
    for (const number of shuffledNumArray) {
      if (isNumberPlacementValid(currentGrid.flat(), cell, number)) {
        cell.value = number;
      }
    }
  }

  if (currentGrid[currentRowIndex].some((cell) => cell.value === null)) {
    return fillRow(currentGrid, currentRowIndex);
  }

  return currentGrid[currentRowIndex];
};

export { generateStartingGrid, fillGrid, isNumberPlacementValid, fillRow };
