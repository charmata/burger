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
    burger.add(req.body, result => {
      res.json(result);
    });
  });
  app.put("/api/burger/:id", (req, res) => {
    burger.update(req.body, result => {
      res.json(result);
    });
  });
};
