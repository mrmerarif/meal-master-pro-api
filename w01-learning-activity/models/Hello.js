const mongoose = require('mongoose');

const helloSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hello', helloSchema);
