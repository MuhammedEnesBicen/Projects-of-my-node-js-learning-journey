const { Product } = require('../models/Product');

const productController = {
    getAll: (req, res) => {
        Product.find().populate("category").select("name")
            .then((products) => {
                return res.json(products);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        const id = req.params.id;
        Product.findById(id)
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
        },
    create: (req, res) => {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
        });
        newProduct.save().then((product) => {
            return res.json(product);
        }
        ).catch((err) => {
            return res.status(500).json(err)
        })
    },
    delete: (req, res) => {
        const id = req.params.id;
        Product.findByIdAndDelete(id)
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    }
}

module.exports = { productController };