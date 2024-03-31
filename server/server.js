const express = require("express");
const sequelize = require("./utils/database.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const inventory = require("./routes/inventoryroute.js");

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/inventory", inventory);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("listening to PORT: ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
