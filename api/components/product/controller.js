const productRepository = require("./repository");

exports.get_by_id = async (req, res) => {
  try {
    const product = await productRepository.getById(req.params.id);
    if (!product) {
      throw new Error("Product not found");
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

exports.get_all = async (req, res) => {
  const products = await productRepository.getAll();
  res.send(products);
};
