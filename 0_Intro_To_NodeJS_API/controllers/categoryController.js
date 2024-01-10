const { Category } = require('../models/Category');

const categoryController = {
    getAll: (req, res) => {
        Category.find()
            .then((categories) => {
                return res.json(categories);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        const id = req.params.id;
    Category.findById(id)
        .then((category) => {
            return res.json(category);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
    },
    create: (req, res) => {
        const newCategory = new Category({
            name: req.body.name,
        });
    
        newCategory.save()
            .then((category) => {
                return res.status(201).json(category);
            })
            .catch((err) => {
                return res.status(500).json(err);
            })
    },
    delete: (req, res) => {
        const id = req.params.id;
    Category.findByIdAndDelete(id)
        .then((category) => {
            return res.json(category);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
    }
}

module.exports = {
    categoryController
}