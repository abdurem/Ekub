const express = require('express');
const router = express.Router();
const equbController = require('../controllers/equbController.js');
const authorizeToken = require('../middlewares/authJWT.js');

router.get('/', authorizeToken, equbController.getAllequbs);
router.get('/:id', authorizeToken, equbController.getequbById);
router.post('/', authorizeToken, equbController.createequb);
router.put('/:id', authorizeToken, equbController.updateequb);
router.delete('/:id', authorizeToken, equbController.deleteequb);


module.exports = router;