export class ShoppingCart {
  constructor() {
    this._products = [];
  }

  count() {
    return this._products.length;
  }

  addProduct(product) {
    this._products.push(product);
  }

  *[Symbol.iterator]() {
    for (let product of this._products) {
      yield product;
    }
  }
}
