module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_inventory().then(products => res.status(200).send(products));
  },

  addProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_products([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).json({ errorMessage: "Something went wrong" });
        console.log(error);
      });
  },
  editProduct: (req, res) => {
    req.app
      .get("db")
      .edit_products([req.params.id, req.body.img])
      .then(result => res.status(200).json(result))
      .catch(error => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(error);
      });
  },

  deleteProduct: (req, res) => {
    let db = req.app
      .get("db")
      .delete_product(req.params.id)
      .then(result => res.json(result))
      .catch(error => {
        res.status(500).json("there was an error");
        console.log(error);
      });
  }
};
