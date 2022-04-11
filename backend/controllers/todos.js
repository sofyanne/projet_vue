const Todo = require('../models/Todo');
const { genericCtrl } = require("../helpers/ctrlHelper");
const todoServices = require("../services/todosService");

//contrôleur de la route GET /todos
exports.list = async (req, res) => {
  // return genericCtrl(req, res, async () => {
  try {
    const todos = await todoServices.list();
   
    if (todos) res.status(200).json(todos);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
  // });
}

//contrôleur de la route GET /todos/:id
exports.getOneItem = (req, res) => {
  // on interroge la base de donnée
  Todo.findOne({
    _id: req.params.id
  }).then((todo) => {
    // si il a des données, on les renvoie en JSON
    res.status(200).json(todo)
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route POST /todos/
exports.postItem = (req, res) => {
  console.log("postItem");
  // console.log(req.body)
  // on fait des vérifications sur la donnée passée dans le body
  if(!req.body.description) {
    // si il y a une erreur on interrompt l'opération...
    return res.status(400).json({ error: 'Les paramètres description sont obligatoires.' })
  }

  //si tout va bien
  //on crée un nouveau document Mongo avec le model Todo
  const todo = new Todo({
    ...req.body //ici on passe les données envoyées dans le body de la requête post
  })

  //sauvegarde en BDD, retourne la donnée sauvegardée
  todo.save().then(() => {

    // retourne la réponse au format JSON
    //le status code 201 indique que la ressource a bien été créée
    return res.status(201).json({
      message: 'Tache crée !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route PUT /todos/:id
exports.patchItem = (req, res) => {
  //mise à jour de l'élément en BDD
  Todo.updateOne({ _id: req.params.id },{ ...req.body })
  .then(() => {
    // retourne la réponse au format JSON
    //le status code 201 indique que la ressource a bien été créée
    res.status(201).json({
      message: 'Tache mise à jour !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route DELETE /todo/:id
exports.deleteItem = (req, res) => {
  console.log("DELETE");
  // on interroge la base de donnée
  Todo.deleteOne({
    _id: req.params.id
  }).then((todo) => {
    // si la tache est trouvée, on la supprime, puis renvoie un message de confirmation
    res.status(201).json({
      message: 'Tache supprimée'
    })
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}
