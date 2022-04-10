const express = require("express");
const router = express.Router();

// les middleWare permettent d'externaliser et
//de globaliser la logique du traitement d'une requête
const verifyParams = require("../middleware/verifyParams");

//importer les fonctions du contrôleur des routes pour todos/
const todoCtrl = require("../controllers/todos");

// route /todos/
router.get("/", todoCtrl.list);

// route /todos/:id
//le router executera la requête dans l'ordre des middlewares,
//pour finir avec le contrôleur de la requête
router.get("/:id", verifyParams, todoCtrl.getOneItem);

router.put("/:id", todoCtrl.patchItem);
router.post("/post", todoCtrl.postItem);

router.delete("/:id", todoCtrl.deleteItem);


module.exports = router;
