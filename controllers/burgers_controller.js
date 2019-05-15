var burger = require("../models/burger");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index", { burgers: burger.getAll() });
  });
  app.get("/api/burger", (req, res) => {
    res.json(burger.getAll());
  });
  app.post("/api/burger", (req, res) => {
    var data = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };
    res.json(burger.add(data));
  });
  app.put("/api/burger/:id", (req, res) => {
    var data = {
      id: req.params.id,
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };
    res.json(burger.update(data));
  });
};
