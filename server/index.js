require("dotenv").config();
const express = require("express");
const massive = require("massive");
const products = require("./products_controller");
const app = express();

const { CONNECTION_STRING } = process.env;
const PORT = 5050;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database hit");
    app.set("db", dbInstance);
  })
  .catch(error => console.log(error));

app.use(express.json());

app.get("/api/inventory", products.getProducts);
app.post("/api/inventory", products.addProducts);
app.put("/api/inventory/:id", products.editProduct);
app.delete("/api/inventory/:id", products.deleteProduct);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
