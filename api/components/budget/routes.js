const express = require("express");
const router = express.Router();
const budgetController = require("./controller");

router.get("/calculate", budgetController.calculate_final_price);

// router.post('/', function (req, res) {
//     res.send('POST /products')
// });

module.exports = router;
