function sumSalary(salaries) {
  let sumSalaries = 0;

  for (let key in salaries) {
    if (!isNaN(salaries[key]) && salaries[key] != Infinity && salaries[key] != -Infinity) {
      sumSalaries = sumSalaries + salaries[key];
    }
  }
  return sumSalaries;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

