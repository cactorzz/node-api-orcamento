class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductPrice() {
    return this.price;
  }
}

module.exports = Product;
