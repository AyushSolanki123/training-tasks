const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

const routes = require("./Routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);

// Global Error Handler
app.use("/", (err, req, res, next) => {
  console.log("Error Occurred");
  console.log(err);
  console.log(err.message || "Internal server occurred");
  res.status(err.status || 500);
  res.json({ errorMessage: err.message || "Server error occurred" });
});

app.listen(PORT, () => {
  console.log("Server started at PORT: ", PORT);
  console.log("Server listening at http://localhost:" + PORT);
});
