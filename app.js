const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const List = require('./models/list')

const addItemRoutes = require('./routes/items')

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(addItemRoutes)

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
