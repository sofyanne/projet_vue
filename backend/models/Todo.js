const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  description: { type: String },
  done: { type: Boolean },
},
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('Todo', todoSchema);