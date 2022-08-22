const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');
const authorizeToken = require('../middlewares/authJWT.js');

router.get('/', authorizeToken, customerController.getAllcustomers);
router.get('/:id', authorizeToken, customerController.getcustomerById);
router.post('/', authorizeToken, customerController.createcustomer);
router.put('/:id', authorizeToken, customerController.updatecustomer);
router.delete('/:id', authorizeToken, customerController.deletecustomer);


module.exports = router;