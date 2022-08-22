const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController.js');
const authorizeToken = require('../middlewares/authJWT.js');


router.get('/', authorizeToken, transactionController.getAlltransactions);
router.get('/:id', authorizeToken, transactionController.gettransactionById);
router.post('/', authorizeToken, transactionController.createtransaction);
router.put('/:id', authorizeToken, transactionController.updatetransaction);
router.delete('/:id', authorizeToken, transactionController.deletetransaction);


module.exports = router;