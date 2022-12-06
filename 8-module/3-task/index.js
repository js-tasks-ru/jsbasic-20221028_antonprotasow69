export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon,) {
    this.cartIcon = cartIcon;

  }

  addProduct(product) {
    if (!product) {
      return;
    }

    let newProduct = {
      product,
      count: 1,
    };

    if (this.cartItems.length === 0) {

      this.cartItems.push(newProduct);

    }

    else if (this.cartItems.find(item => item.product.name === product.name)) {

      this.cartItems.find(item => item.product.name === product.name).count++

    }

    else {


      this.cartItems.push(newProduct);

    }

    this.onProductUpdate(newProduct);
  }

  updateProductCount(productId, amount) {

    let currentProd = this.cartItems.find(item => item.product.id === productId);

    if (amount > 0) {
      currentProd.count = currentProd.count + amount;
    }

    else if (amount < 0) {

      currentProd.count = currentProd.count + amount;
    }

    if (currentProd.count === 0) {
      this.cartItems = this.cartItems.filter((item) => item !== currentProd)

    }

    this.onProductUpdate(currentProd)

  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    }
    else return false;
  }

  getTotalCount() {
    let totalCount = this.cartItems.reduce((accumulator, item) => {

      return accumulator + item.count
    }, 0);

    return totalCount;
  }

  getTotalPrice() {

    let totalprice = this.cartItems.reduce((accumulator, item) => {

      return accumulator + item.product.price * item.count
    }, 0)
    return totalprice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

