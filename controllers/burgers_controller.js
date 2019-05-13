var burger = require("../models/burger");

var router = app => {
  app.get("/", (req, res) => {});
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

module.exports = router(app);
