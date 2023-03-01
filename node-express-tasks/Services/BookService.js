const { default: mongoose } = require("mongoose");
const ErrorBody = require("../Utils/ErrorBody");

const Book = require("../Models/Book").model;

function addBook(reqBody) {
  return new Promise((resolve, reject) => {
    let _reqBody = reqBody;
    Book.find()
      .count()
      .then((count) => {
        _reqBody = Object.assign(_reqBody, { bookId: count + 1 });
        return Book.create(_reqBody);
      })
      .then((response) => resolve(response))
      .catch((error) => {
        console.log(error);
        reject(new ErrorBody(500, error.message || "Internal Server Error"));
      });
  });
}

function listBooks() {
  return Book.find({ isDeleted: false }).populate("issuedBy");
}

function getBookById(id) {
  return Book.findOne({ bookId: id, isDeleted: false }).populate("issuedBy");
}

function updateBook(id, reqBody) {
  return Book.findOneAndUpdate(
    { bookId: id },
    { $set: { ...reqBody } },
    { new: true }
  ).populate("issuedBy");
}

function deleteBook(id) {
  return Book.findOneAndUpdate(
    { bookId: id },
    { $set: { isDeleted: true } },
    { new: true }
  ).populate("issuedBy");
}

function issueBook(id, userId) {
  return Book.findOneAndUpdate(
    { bookId: id, isDeleted: false },
    { $set: { issuedBy: mongoose.Types.ObjectId(userId) } },
    { new: true }
  ).populate("issuedBy");
}

function returnBook(id) {
  return Book.findOneAndUpdate(
    { bookId: id, isDeleted: false },
    { $set: { issuedBy: null } },
    { new: true }
  );
}

function listUserIssuedBooks(userId) {
  return Book.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "issuedBy",
        foreignField: "_id",
        as: "issuedBy",
      },
    },
    {
      $unwind: {
        path: "$issuedBy",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $match: {
        "issuedBy._id": mongoose.Types.ObjectId(userId),
        isDeleted: false,
      },
    },
  ]);
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
