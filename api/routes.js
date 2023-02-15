const userRoutes = require("./components/user/routes");
const productRoutes = require("./components/product/routes");
const budgetRoutes = require("./components/budget/routes");

const configureRoutes = (expressApp) => {
  expressApp.get("/", (req, res) => {
    res.send("Express running");
  });

  expressApp.use("/users", userRoutes);
  expressApp.use("/products", productRoutes);
  expressApp.use("/budget", budgetRoutes);
};

module.exports = {
  configureRoutes,
};
