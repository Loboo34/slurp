const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number_of_Episodes: {
        type: String,
         required: true
    },
    type: {
        type: String,
         required: true
    },
    description: {
        type: String,
         required: true
    },
})

module.exports = mongoose.model('anime', animeSchema)
