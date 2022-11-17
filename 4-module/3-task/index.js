function highlight(table) {
  let row = table.rows;

  for (let i = 1; i < row.length; i++) {

    for (let k = 0; k < row[i].cells.length; k++) {
      if (row[i].cells[k].innerHTML == 'm') {
        row[i].classList.add('male');
      }
      if (row[i].cells[k].innerHTML == 'f') {
        row[i].classList.add('female');
      }

      if (row[i].cells[k].hasAttribute("data-available")
        && row[i].cells[k].getAttribute("data-available") == 'true') {

        row[i].classList.add('available');

      }

      else if (row[i].cells[k].hasAttribute("data-available")
        && row[i].cells[k].getAttribute("data-available") == 'false') {
        row[i].classList.add('unavailable');

      }
      else if (!row[i].cells[row[i].cells.length - 1].hasAttribute("data-available")) {
        row[i].setAttribute('hidden', '')
      }

    }

  }



}
