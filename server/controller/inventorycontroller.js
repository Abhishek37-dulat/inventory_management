const Inventory = require("../models/inventory.js");

const getAllInventory = async (req, res, next) => {
  try {
    const data = await Inventory.findAll();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
const getInventory = async (req, res, next) => {
  try {
    console.log("params", req.params.id);
    const data = await Inventory.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
const addItemToInventory = async (req, res, next) => {
  try {
    const item_name = req.body.item_name;
    const description = req.body.description;
    const price = req.body.price;
    const qtn = req.body.qtn;
    const data = await Inventory.create({
      item_name: item_name,
      description: description,
      price: price,
      qtn: qtn,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
const updateItemToInventory = async (req, res, next) => {
  try {
    const item_name = req.body.item_name;
    const description = req.body.description;
    const price = req.body.price;
    const qtn = req.body.qtn;
    const data = await Inventory.findByPk(req.params.id);

    (data.item_name = item_name),
      (data.description = description),
      (data.price = price),
      (data.qtn = qtn),
      data.save();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
const deleteItemToInventory = async (req, res, next) => {
  try {
    const data = await Inventory.findByPk(req.params.id);
    await data.destroy();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = {
  getAllInventory,
  getInventory,
  addItemToInventory,
  updateItemToInventory,
  deleteItemToInventory,
};
