import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.renderProducts();

  }

  renderProducts() {

    this.elem = createElement(`<div class="products-grid"></div>`);
    this.gridInner = createElement(`<div class="products-grid__inner">
  </div>`);

    this.elem.appendChild(this.gridInner);

    this.products.map((item) => {

      let card = new ProductCard(item);
      this.gridInner.append(card.elem)
    });
    return this.elem
  }

  updateFilter(filters) {

    Object.assign(this.filters, filters);
    this.selected = [];

    for (let item of this.products) {

      if (this.filters.noNuts && item.nuts) {
        continue;
      }

      if (this.filters.vegeterianOnly && !item.vegeterian) {
        continue;

      }

      if (this.filters.maxSpiciness != undefined && item.spiciness > this.filters.maxSpiciness) {
        continue;
      }

      if (this.filters.category && item.category != this.filters.category) {
        continue;
      }

      this.selected.push(
        item
      );
    }
    this.gridInner.innerHTML = '';
    this.selected.map(item => {
      const card = new ProductCard(item);
      this.gridInner.append(card.elem)
    })
  }
}

