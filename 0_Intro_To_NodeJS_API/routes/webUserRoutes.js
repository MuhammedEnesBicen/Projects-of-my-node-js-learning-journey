const { webUserController } = require('../controllers/webUserController');
const routes = require('express').Router();

routes.get('/', webUserController.getAll);
routes.get('/:id', webUserController.getById);
routes.post('/', webUserController.create);
routes.delete('/:id', webUserController.delete);

module.exports = routes;