const mongoose = require('mongoose');

const Characters = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    alive: {
        type: Boolean,
        required: true,
        trim: true
    },
    movie: {
        type: Array,
        required: true,
        trim: true
    },
    species: {
        type: Array,
        required: true,
        trim: true
    }
});
Characters.index({name: 'text'})
module.exports = mongoose.model('Character', Characters);