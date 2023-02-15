const express = require("express");
const router = express.Router();
const productController = require("./controller");

router.get("/", productController.get_all);
router.get("/:id", productController.get_by_id);

// router.post('/', function (req, res) {
//     res.send('POST /products')
// });

module.exports = router;
