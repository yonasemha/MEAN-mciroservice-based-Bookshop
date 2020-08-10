const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const booksSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("books", booksSchema);
