function showSalary(users, age) {
  let arrFilter = users.filter(function (item) {

    return item.age <= age;
  });

  let resultArr = arrFilter.map(function (item) {

    return item.name + ', ' + item.balance;
  });

  return resultArr.join('\n');

}