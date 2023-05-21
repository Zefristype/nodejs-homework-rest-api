const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_HOST;

console.log(uriDb);
mongoose
  .connect(uriDb)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
