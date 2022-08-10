const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController.js');


router.get('/', transactionController.getAlltransactions);
router.get('/:id', transactionController.gettransactionById);
router.post('/', transactionController.createtransaction);
router.put('/:id', transactionController.updatetransaction);
router.delete('/:id', transactionController.deletetransaction);


module.exports = router;