const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// controller
const bookController = require("../Controllers/BookController");

router.get("/", bookController.listBooks);

router.get("/:bookId", bookController.getBookById);

router.post(
  "/",
  [body("bookName").notEmpty(), body("authorName").notEmpty()],
  bookController.addBook
);

router.put("/:bookId", bookController.updateBook);

router.delete("/:bookId", bookController.deleteBook);

module.exports = router;
