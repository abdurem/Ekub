const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');


router.get('/', employeeController.getAllemployees);
router.get('/:id', employeeController.getemployeeById);
router.post('/', employeeController.createemployee);
router.put('/:id', employeeController.updateemployee);
router.delete('/:id', employeeController.deleteemployee);


module.exports = router;