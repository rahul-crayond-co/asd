const { items } = require("../utils/constants");

// @desc get all items
// route /api/items
const getAllItems = (req, res) => {
  res.status(200).json(items);
};

// @desc get item by ID
// route /api/items/:id
const getItemByID = (req, res, next) => {
  const id = req?.params?.id;
  const findItem = items?.find((item) => item?.id === id);
  if (!findItem) {
    const error = new Error(`item with id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(findItem);
};

// @desc create new item
// route /api/items
const createItem = (req, res, next) => {
  const title = req.body.title;
  if (!title) {
    const error = new Error("title is required");
    error.status = 404;
    return next(error);
  }
  items.push({
    id: (items.length + 1).toString(),
    title,
  });
  res.status(200).send(items);
};

// @desc edit item by id
// route /api/items/:id
const updateItem = (req, res, next) => {
  const id = req.params?.id;
  const title = req.body?.title;
  const findItem = items?.find((item) => item?.id === id);
  if (!findItem) {
    const error = new Error(`item with id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  findItem.title = title;
  res.status(200).send(items);
};

// @desc delete item by id
// route /api/items/:id
const deleteItem = (req, res, next) => {
  const id = req.params?.id;
  const findItem = items?.find((item) => item?.id === id);
  if (!findItem) {
    const error = new Error(`item with id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).send(items.filter((item) => item?.id !== id));
};

module.exports = {
  getAllItems,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
};
