const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const routes = require("./routes");
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

db.sequelize.sync().then(function () {
    app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
});