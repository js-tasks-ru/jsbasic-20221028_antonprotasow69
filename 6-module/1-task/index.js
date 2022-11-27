export default class UserTable {


  constructor(rows) {
    this.rows = rows;
    this.render();
  }

  render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = this.rows.map(function (item) {
      return `<tr>
      <td> ${item.name} </td>
      <td> ${item.age} </td>
      <td> ${item.salary} </td>
      <td> ${item.city} </td>
      <td> <button> X </button> </td>
      </tr>`

    });

    this.elem.addEventListener('click', this.remove);
    return this.elem;
  }
  remove(ev) {
    let target = ev.target;

    if (target.closest('button')) {
      target.closest('tr').remove();
    }
  }


}



