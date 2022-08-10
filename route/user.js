const express = require('express');
const router = express.Router();
const app = express();
const userController = require('../controllers/userController.js');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/auth', userController.auth);


module.exports = router;