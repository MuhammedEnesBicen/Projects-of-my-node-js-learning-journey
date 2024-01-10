const {default: mongoose} = require('mongoose');

const WebUserSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
},
    {
        timestamps: true
    }
);

const WebUser = mongoose.model('WebUser', WebUserSchema);

module.exports = { WebUser };