const express = require('express');
const router = express.Router();
const equbController = require('../controllers/equbController.js');


router.get('/', equbController.getAllequbs);
router.get('/:id', equbController.getequbById);
router.post('/', equbController.createequb);
router.put('/:id', equbController.updateequb);
router.delete('/:id', equbController.deleteequb);


module.exports = router;