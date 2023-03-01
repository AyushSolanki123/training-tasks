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
    issuedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
