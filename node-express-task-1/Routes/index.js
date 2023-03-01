const router = require("express").Router();

router.use("/books", require("./BookRoutes"));

router.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = router;
