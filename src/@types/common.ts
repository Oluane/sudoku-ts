type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GridCell = {
  row: number;
  column: number;
  index: number;
  value: number | null;
};

export type { Numbers, GridCell };
