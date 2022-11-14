function filterRange(arr, a, b) {
  let result = arr.filter(function (array) {
    return (array >= a && array <= b);
  });

  return result;
}