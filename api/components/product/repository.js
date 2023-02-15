const Product = require("./model");
const mockendHttpClient = require("../../../services/mockendHttpClient");

class ProductRepository {
  async getById(_id) {
    return await mockendHttpClient
      .get(`/products/${_id}`)
      .then((res) => {
        return new Product(res.data.id, res.data.name, res.data.price);
      })
      .catch((err) => {
        throw err;
      });
  }

  async getAll() {
    return await mockendHttpClient
      .get("/products")
      .then((res) => {
        if (res.data.length > 0) {
          res.data.forEach((element, index) => {
            res.data[index] = new Product(
              element.id,
              element.name,
              element.price
            );
          });
          return res.data;
        } else {
          throw new Error("Request failed with status code 404");
        }
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = new ProductRepository();
