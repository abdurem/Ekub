const express = require('express');
const router = express.Router();
const app = express();
const userController = require('../controllers/userController.js');
const authorizeToken = require('../middlewares/authJWT.js');

router.get('/', authorizeToken ,userController.getAllUsers);
router.get('/:id', authorizeToken,userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', authorizeToken, userController.updateUser);
router.delete('/:id', authorizeToken, userController.deleteUser);
router.post('/login', userController.auth);


module.exports = router;