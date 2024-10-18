const express = require("express");
const {
  getAllItems,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemByID);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
