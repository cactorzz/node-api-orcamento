const productRepository = require("../product/repository");
const userRepository = require("../user/repository");
const Budget = require("./model");

exports.calculate_final_price = async (req, res) => {
  try {
    const user = await userRepository.getById(req.query.uid);
    if (!user) {
      throw new Error("User not found");
    }
    var products = [];
    if (req.query.pid) {
      await Promise.all(
        req.query.pid.split(",").map(async (element) => {
          const product = await productRepository.getById(element);
          products.push(product);
        })
      );
    }
    if (products.length == 0) {
      throw new Error("Invalid product(s)");
    }
    const price = __calculateBudgetFinalPrice(
      user.tax,
      products.map((element) => element.price)
    );
    if (price <= 0) {
      throw new Error("Error while calculating budget final price");
    }

    const response = new Budget(user, products, price);

    res.status(200).send(response);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

function __calculateBudgetFinalPrice(tax, prices) {
  const total = prices.reduce((total, curr) => total + curr, 0);
  return (tax / 100) * total;
}
