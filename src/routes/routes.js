const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
