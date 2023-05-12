const List = require("../models/list");

exports.postAddItem = (req, res, next) => {
  const itemName = req.body.item;
  const description = req.body.desc;
  const price = req.body.price;
  const quantity = req.body.quantity;
  List.create({
    item: itemName,
    description: description,
    price: price,
    quantity: quantity,
  })
    .then((result) => {
      console.log("Item Added"), res.redirect("/add-item");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getItem = (req, res, next) => {
  res.render("main", {
    pageTitle: "Add Item",
    path: "/add-item",
  });
};

exports.getAddItem = (req, res, next) => {
  List.findAll()
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error Occured While retrieving Users" });
    });
};
