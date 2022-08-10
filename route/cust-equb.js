const express = require('express');
const router = express.Router();
const cust_equbController = require('../controllers/cust-equbController.js');


router.get('/', cust_equbController.getAllcust_equbs);
router.get('/:id', cust_equbController.getcust_equbById);
router.post('/', cust_equbController.createcust_equb);
router.put('/:id', cust_equbController.updatecust_equb);
router.delete('/:id', cust_equbController.deletecust_equb);


module.exports = router;