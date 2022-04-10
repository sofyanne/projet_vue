//contrôleur de la route GET /todos
const Todo = require('../models/Todo');
exports.list = () => {
  // on interroge la base de donnée
  return Todo.find();
}
