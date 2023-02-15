const User = require("./model");
const mockendHttpClient = require("../../../services/mockendHttpClient");

class UserRepository {
  async getById(_id) {
    return await mockendHttpClient
      .get(`/users/${_id}`)
      .then((res) => {
        return new User(res.data.id, res.data.name, res.data.tax);
      })
      .catch((err) => {
        throw err;
      });
  }

  async getAll() {
    return await mockendHttpClient
      .get("/users")
      .then((res) => {
        if (res.data.length > 0) {
          res.data.forEach((element, index) => {
            res.data[index] = new User(element.id, element.name, element.tax);
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

module.exports = new UserRepository();
