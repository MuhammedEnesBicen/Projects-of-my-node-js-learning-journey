const { productController } = require('../controllers/productController');

const routes = require('express').Router();

routes.get('/', productController.getAll);
routes.get('/:id', productController.getById);
routes.post('/', productController.create);
routes.delete('/:id', productController.delete);

module.exports = routes;