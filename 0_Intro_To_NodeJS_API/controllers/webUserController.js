const { WebUser } = require('../models/WebUser');


const webUserController = {
    getAll: (req, res) => {
        WebUser.find()
            .then((webUsers) => {
                return res.json(webUsers);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        const id = req.params.id;
    WebUser.findById(id)
        .then((webUser) => {
            return res.json(webUser);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
    },
    create: (req, res) => {
        const newWebUser = new WebUser({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
    
        newWebUser.save()
            .then((webUser) => {
                return res.status(201).json(webUser);
            })
            .catch((err) => {
                return res.status(500).json(err);
            })
    },
    delete: (req, res) => {
        const id = req.params.id;
    WebUser.findByIdAndDelete(id)
        .then((webUser) => {
            return res.json(webUser);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
    }
}

module.exports = {
    webUserController
}