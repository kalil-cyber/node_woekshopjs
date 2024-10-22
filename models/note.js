const mongoose = require('mongoose');

// Définir un schéma pour Contact
const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;