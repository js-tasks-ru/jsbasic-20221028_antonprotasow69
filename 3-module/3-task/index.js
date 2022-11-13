function camelize(str) {
  let arr = str.split('-');
  let newArr = arr.map(function (item, index) {
    if (index != 0) {
      return item[0].toUpperCase() + item.slice(1);
    }
    else
      return item;
  });
  let result = newArr.join('');

  return result;
}