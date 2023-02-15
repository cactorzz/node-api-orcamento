class User {
  constructor(id, name, tax) {
    this.id = id;
    this.name = name;
    this.tax = tax;
  }

  getUserTax() {
    return this.tax;
  }
}

module.exports = User;
