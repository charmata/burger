var burger = require("../models/burger");

module.exports = app => {
  app.get("/", (req, res) => {
    burger.getAll(result => {
      res.render("index", { burger: result });
    });
  });
  app.get("/api/burger", (req, res) => {
    burger.getAll(result => {
      res.json(result);
    });
  });
  app.post("/api/burger", (req, res) => {
    var data = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };
    burger.add(data, result => {
      res.json(result);
    });
  });
  app.put("/api/burger/:id", (req, res) => {
    var data = {
      id: req.params.id,
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };
    burger.update(data, result => {
      res.json(result);
    });
  });
};
