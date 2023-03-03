const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    bookId: {
      type: Schema.Types.Number,
      required: true,
    },
    bookName: {
      type: Schema.Types.String,
      required: true,
    },
    authorName: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
      default: 39.99,
    },
    issuedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    isDeleted: {
      type: Schema.Types.Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = {
  model: mongoose.model("Book", BookSchema),
  schema: BookSchema,
};
