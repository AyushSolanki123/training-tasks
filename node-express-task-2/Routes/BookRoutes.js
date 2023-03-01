const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// controller
const bookController = require("../Controllers/BookController");
const { verifyToken } = require("../MiddleWare/VerifyToken");

router.get("/", verifyToken, bookController.listBooks);

router.get("/:bookId", verifyToken, bookController.getBookById);

router.get("/list/user", verifyToken, bookController.listUserIssuedBooks);

router.get(
  "/issue/:bookId/user/:userId",
  verifyToken,
  bookController.issueBook
);

router.get("/return/:bookId", verifyToken, bookController.returnBook);

router.post(
  "/",
  [body("bookName").notEmpty(), body("authorName").notEmpty()],
  bookController.addBook
);

router.put("/:bookId", verifyToken, bookController.updateBook);

router.delete("/:bookId", verifyToken, bookController.deleteBook);

module.exports = router;
