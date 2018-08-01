const router = require("express").Router();
const ItemController = require("../../controllers/ItemController");

router.route("/")
.get(ItemController.findAll)


module.exports = router;