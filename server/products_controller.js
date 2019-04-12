module.exports = {
  getProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.get_inventory().then(products => res.status(200).send(products));
  },

  addProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_products([name, price, img])
      .then(() => res.status(200).json("working"))
      .catch(error => {
        res.status(500).json({ errorMessage: "Something went wrong" });
        console.log(error);
      });
  }
  // edit: (req, res) => {
  //   const dbInstance = req.app.get("db");
  //   const { params, query } = req;

  //   dbInstance
  //     .edit_products([params.id, query.desc])
  //     .then(() => res.sendStatus(200))
  //     .catch(error => {
  //       res.status(500).send({ errorMessage: "Something went wrong" });
  //       console.log(error);
  //     });
  // },
};
