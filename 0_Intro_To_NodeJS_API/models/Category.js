const { default: mongoose } = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
},
    {
        timestamps: true
    }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };