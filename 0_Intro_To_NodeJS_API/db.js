const { default: mongoose } = require('mongoose');

const db = {
    connect: () => {
        mongoose.connect(process.env.CONNECTION_STRING)
            .then(() => console.log('Connected to the database'))
            .catch(err => {
                console.log('Unable to connect to the database');
                console.log(err);
            })
    }
}

module.exports = { db };