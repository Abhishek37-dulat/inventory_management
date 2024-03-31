const express = require("express");
const {
  getAllInventory,
  getInventory,
  addItemToInventory,
  updateItemToInventory,
  deleteItemToInventory,
} = require("../controller/inventorycontroller.js");
const route = express();

route.get("/", getAllInventory);
route.get("/:id", getInventory);
route.post("/", addItemToInventory);
route.put("/:id", updateItemToInventory);
route.delete("/:id", deleteItemToInventory);

module.exports = route;
