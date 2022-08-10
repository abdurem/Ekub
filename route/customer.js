const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');


router.get('/', customerController.getAllcustomers);
router.get('/:id', customerController.getcustomerById);
router.post('/', customerController.createcustomer);
router.put('/:id', customerController.updatecustomer);
router.delete('/:id', customerController.deletecustomer);


module.exports = router;