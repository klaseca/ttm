const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dateCreated: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  todos: [todoSchema],
});

module.exports = model('User', userSchema);
