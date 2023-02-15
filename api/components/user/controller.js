const userRepository = require("./repository");

exports.get_by_id = async (req, res) => {
  try {
    const user = await userRepository.getById(req.params.id);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

exports.get_all = async (req, res) => {
  const users = await userRepository.getAll();
  res.send(users);
};
