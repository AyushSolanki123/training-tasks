const router = require("express").Router();
const { body } = require("express-validator");

const bookController = require("../Controller/BooksController");

router.get("/", bookController.listBooks);

router.get("/:bookId", bookController.getBookById);

router.post(
  "/",
  [body("bookName").notEmpty(), body("authorName").notEmpty()],
  bookController.addBook
);

router.post(
  "/multiple",
  [body("data").isArray()],
  bookController.addMultipleBooks
);

router.put("/:bookId", bookController.updateBook);

router.delete("/:bookId", bookController.deleteBook);

module.exports = router;
