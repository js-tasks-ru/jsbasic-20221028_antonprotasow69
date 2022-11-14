function getMinMax(str) {
  let strSplit = str.split(' ');
  let arrFilter = strSplit.filter(function (elem) {
    if (elem == Number(elem))
      return elem;

  });
  let max = Math.max(...arrFilter);
  let min = Math.min(...arrFilter);
  let result = {
    'max': max,
    'min': min
  }

  return result;
}