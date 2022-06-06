const shuffle = <T>(array: T[]) => {
  const shuffledArray = [...array];

  for (let currentIndex = shuffledArray.length - 1; currentIndex >= 0; currentIndex--) {
    const swapIndex = Math.floor(Math.random() * currentIndex + 1);
    [shuffledArray[currentIndex], shuffledArray[swapIndex]] = [shuffledArray[swapIndex], shuffledArray[currentIndex]];
  }

  return shuffledArray;
};

const calculateRegionStartingRowOrColumn = (rowOrColumnIndex: number) => {
  switch (rowOrColumnIndex % 3) {
    case 1:
      return rowOrColumnIndex;
    case 2:
      return rowOrColumnIndex - 1;
    case 0:
      return rowOrColumnIndex - 2;
    default:
      return rowOrColumnIndex;
  }
};

export { shuffle, calculateRegionStartingRowOrColumn };
