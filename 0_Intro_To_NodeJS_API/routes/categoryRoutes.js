const { categoryController } = require("../controllers/categoryController");


const routes = require('express').Router();

routes.get('/', categoryController.getAll);
routes.get('/:id', categoryController.getById);
routes.post('/', categoryController.create);
routes.delete('/:id', categoryController.delete);

module.exports = routes;