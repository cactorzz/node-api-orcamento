const express = require("express");
const router = express.Router();
const userController = require("./controller");

router.get("/", userController.get_all);
router.get("/:id", userController.get_by_id);

// router.post('/', function (req, res) {
//     res.send('POST /users');
// });

module.exports = router;
