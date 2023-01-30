// Sukurkime tris klases: produktai, krepselio produktai ir krepselis.

class Product {
  constructor(name, price, imageURL, description, stock) {
    this.id = Math.round(Math.random() * 10 ** 16);
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this.stock = stock;
  }
}
const exampleProduct = new Product(
  "A Book",
  24.99,
  "#",
  "A very good book",
  10
);

const exampleProduct2 = new Product(
  "A Bike",
  300.99,
  "#",
  "A very good bike",
  5
);

const exampleProduct3 = new Product(
  "Pillow",
  20.99,
  "#",
  "A very good pillow",
  200
);

class CartProduct extends Product {
  //
  constructor(product, quantity) {
    super(
      product.name,
      product.price,
      product.imageURL,
      product.description,
      product.stock
    );

    const validQty = quantity > product.stock ? product.stock : quantity;

    this.assignQuantityAndTotalPrice(validQty);
  }

  increaseCount() {
    const newQty = this.quantity + 1;

    if (newQty > this.stock) {
      return;
    }

    this.assignQuantityAndTotalPrice(newQty);
  }

  decreaseCount() {
    const newQty = this.quantity - 1;

    if (newQty < 0) {
      return;
    }

    this.assignQuantityAndTotalPrice(newQty);
  }

  assignQuantity(quantity) {
    if (quantity < 0 || quantity > this.stock) {
      return;
    }

    this.assignQuantityAndTotalPrice(quantity);
  }

  assignQuantityAndTotalPrice(quantity) {
    this.quantity = quantity;
    this.totalPrice = (this.price * 100 * quantity) / 100;
  }
}

const cartProduct = new CartProduct(exampleProduct, 9);
const cartProduct2 = new CartProduct(exampleProduct2, 2);
console.log(cartProduct.quantity); // 9

cartProduct.increaseCount();
console.log(cartProduct.quantity); // 10

cartProduct.increaseCount();
console.log(cartProduct.quantity); // 10

cartProduct.decreaseCount();
console.log(cartProduct.quantity); // 9

cartProduct.assignQuantity(3);
console.log(cartProduct.quantity); // 3

class Cart {
  constructor() {
    this.products = [];
    this.totalCartPrice = 0;
    this.totalCartQuantity = 0;
  }

  addProduct(product) {
    /**
    1. prideti produktus i krepseli (addProduct)
    - jei krepselio produkto kiekis lygus 0, tai i krepseli preke neprisideda
    - jei krepselyje jau yra toks produktas, tai turi didinti jo kieki
    - atnaujinti bendra krepselio suma (totalCartPrice)
    - atnaujinti bendra kieki (totalCartQuantity)
     */

    let isAssignedQty = false;
    for (let innerProduct of this.products) {
      if (innerProduct.id === product.id) {
        const newQuantity = innerProduct.quantity + product.quantity;
        innerProduct.assignQuantity(newQuantity);
        isAssignedQty = true;
      }
    }

    if (!isAssignedQty) {
      this.products.push(product);
    }

    this.updateCartTotalPriceAndQuantity();
  }

  updateCartTotalPriceAndQuantity() {
    let newCartQty = 0;
    let newCartTotalPrice = 0;

    for (let product of this.products) {
      newCartTotalPrice += product.totalPrice * 100;
      newCartQty += product.quantity;
    }

    this.totalCartPrice = newCartTotalPrice / 100;
    this.totalCartQuantity = newCartQty;
  }
}

const myCart = new Cart();
myCart.addProduct(cartProduct);
myCart.addProduct(cartProduct);
myCart.addProduct(cartProduct2);

console.log(myCart);
