const ErrorBody = require("../Utils/ErrorBody");
const { books } = require("../Utils/state");

const { validationResult } = require("express-validator");

function addBook(req, res, next) {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    console.log("Failed at add books");
    next(new ErrorBody(400, "Invalid Values in the form"));
  } else {
    const response = [...books, req.body];
    res.status(200);
    res.json({
      data: response,
      message: "Books added successfully",
    });
  }
}

function addMultipleBooks(req, res, next) {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    console.log("Failed at add books");
    next(new ErrorBody(400, "Invalid Values in the form"));
  } else {
    const { data } = req.body;
    const response = [...books, ...data];
    res.status(200);
    res.json({
      data: response,
      message: "Books added successfully",
    });
  }
}

function updateBook(req, res, next) {
  const { bookId } = req.params;
  const data = books.map((book) =>
    book.bookId == bookId ? { ...book, ...req.body } : book
  );
  console.log(data);
  res.status(200);
  res.json({
    data: data,
    message: "Book updated Successfully",
  });
}

function deleteBook(req, res, next) {
  const { bookId } = req.params;
  const data = books.filter((book) => book.bookId != bookId);
  res.status(200);
  res.json({
    data: data,
    message: "Book deleted successfully",
  });
}

function listBooks(req, res, next) {
  res.status(200);
  res.json({
    data: books,
    message: "Books Fetched Successfully",
  });
}

function getBookById(req, res, next) {
  const { bookId } = req.params;
  const book = books.find((b) => b.bookId == bookId);
  console.log(bookId);
  res.status(200);
  res.json({
    data: book,
    message: "Book Fetcehd Successfully",
  });
}

module.exports = {
  addBook: addBook,
  addMultipleBooks: addMultipleBooks,
  updateBook: updateBook,
  deleteBook: deleteBook,
  listBooks: listBooks,
  getBookById: getBookById,
};
