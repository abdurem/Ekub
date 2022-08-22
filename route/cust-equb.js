const express = require('express');
const router = express.Router();
const cust_equbController = require('../controllers/cust-equbController.js');
const authorizeToken = require('../middlewares/authJWT.js');

router.get('/', authorizeToken, cust_equbController.getAllcust_equbs);
router.get('/:id', authorizeToken, cust_equbController.getcust_equbById);
router.post('/', authorizeToken, cust_equbController.createcust_equb);
router.put('/:id', authorizeToken, cust_equbController.updatecust_equb);
router.delete('/:id', authorizeToken, cust_equbController.deletecust_equb);


module.exports = router;