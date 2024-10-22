const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

// Afficher tous les Notes
router.get('/', noteController.getNotes);

// Rechercher un Note by id
router.get('/:id', noteController.getNoteById);

// Ajouter un Note
router.post('/', noteController.addNote);

// Mettre à jour un Note
router.put('/:id', noteController.updateNote);

// Supprimer un Note
router.delete('/:id', noteController.deleteNote);

module.exports = router