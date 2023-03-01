const { validationResult } = require("express-validator");
const BookService = require("../Services/BookService");
const ErrorBody = require("../Utils/ErrorBody");
const { logger } = require("../Utils/Logger");

function addBook(req, res, next) {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    logger.error("Error in adding book: " + JSON.stringify(errors));
    throw new ErrorBody(400, "Invalid values in form");
  } else {
    BookService.addBook(req.body)
      .then((response) => {
        res.status(201);
        res.json({
          data: response,
          message: "Book added successfully",
        });
      })
      .catch((error) => {
        logger.error("Failed in add book: " + JSON.stringify(error.message));
        next(
          new ErrorBody(
            error.status || 500,
            error.message || "Internal Server Error"
          )
        );
      });
  }
}

function listBooks(req, res, next) {
  BookService.listBooks()
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Books fetched successfully",
      });
    })
    .catch((error) => {
      logger.error("Failed in list book: " + JSON.stringify(error.message));
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function listUserIssuedBooks(req, res, next) {
  const { userId } = req.query;
  BookService.listUserIssuedBooks(userId)
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Books fetched successfully",
      });
    })
    .catch((error) => {
      logger.error(
        "Failed in list user issued book: " + JSON.stringify(error.message)
      );
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function getBookById(req, res, next) {
  const { bookId } = req.params;
  BookService.getBookById(bookId)
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Book fetched successfully",
      });
    })
    .catch((error) => {
      logger.error(
        "Failed in get book by id: " + JSON.stringify(error.message)
      );
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function updateBook(req, res, next) {
  const { bookId } = req.params;
  BookService.updateBook(bookId, req.body)
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Book updated successfully",
      });
    })
    .catch((error) => {
      logger.error("Failed in update book: " + JSON.stringify(error.message));
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function deleteBook(req, res, next) {
  const { bookId } = req.params;
  BookService.deleteBook(bookId)
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Book deleted successfully",
      });
    })
    .catch((error) => {
      logger.error("Failed in delete book: " + JSON.stringify(error.message));
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function issueBook(req, res, next) {
  const { bookId, userId } = req.params;
  BookService.issueBook(bookId, userId)
    .then((response) => {
      res.status(200);
      res.json({
        data: response,
        message: "Book issued successfully",
      });
    })
    .catch((error) => {
      logger.error("Failed in issue book: " + JSON.stringify(error.message));
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

function returnBook(req, res, next) {
  const { bookId } = req.params;
  BookService.returnBook(bookId)
    .then((response) => {
      res.status(201);
      res.json({
        data: response,
        message: "Book returned successfully",
      });
    })
    .catch((error) => {
      logger.error("Failed in return book: " + JSON.stringify(error.message));
      next(
        new ErrorBody(
          error.status || 500,
          error.message || "Internal Server Error"
        )
      );
    });
}

module.exports = {
  addBook: addBook,
  listBooks: listBooks,
  listUserIssuedBooks: listUserIssuedBooks,
  getBookById: getBookById,
  updateBook: updateBook,
  deleteBook: deleteBook,
  issueBook: issueBook,
  returnBook: returnBook,
};
