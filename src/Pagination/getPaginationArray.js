const totalNumber = 3;

const arrayRange = (first, last, increment = 1) => {
  let arr = [];
  for (let i = first; i < last; i += increment) {
    arr.push(i);
  }
  return arr;
};

export function getPaginationArray(
  currentPage,
  totalPages,
  siblings = 0,
  boundaryCount = 2
) {
  let totalNumberItems = totalNumber + 2 * siblings + 2 * boundaryCount;
  if (totalNumberItems >= totalPages) {
    return [...arrayRange(1, totalPages + 1)];
  }

  let leftIndex =
    currentPage - siblings - boundaryCount > 0
      ? currentPage - siblings - boundaryCount
      : 1;
  let rightIndex =
    currentPage + siblings + boundaryCount <= totalPages
      ? currentPage + siblings + boundaryCount
      : totalPages;

  let showLeftDots = leftIndex >= 3;
  let showRightDots = rightIndex <= totalPages - 2;
  let arrayCount = 2 + 2 * siblings + boundaryCount;

  if (!showLeftDots && showRightDots) {
    return [
      ...arrayRange(1, arrayCount + 1),
      "...",
      ...arrayRange(totalPages + 1 - boundaryCount, totalPages + 1),
    ];
  } else if (showLeftDots && !showRightDots) {
    return [
      ...arrayRange(1, 1 + boundaryCount),
      "...",
      ...arrayRange(totalPages - arrayCount + 1, totalPages + 1),
    ];
  } else {
    return [
      ...arrayRange(1, 1 + boundaryCount),
      "...",
      ...arrayRange(leftIndex + boundaryCount, rightIndex + 1 - boundaryCount),
      "...",
      ...arrayRange(totalPages + 1 - boundaryCount, totalPages + 1),
    ];
  }
}
