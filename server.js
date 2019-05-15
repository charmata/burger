var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

require("./controllers/burgers_controller")(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
