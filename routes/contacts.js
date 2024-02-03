const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.postNew);

router.put('/:id', contactsController.putUpdate);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
