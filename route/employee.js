const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');
const authorizeToken = require('../middlewares/authJWT.js');


router.get('/', authorizeToken, employeeController.getAllemployees);
router.get('/:id', authorizeToken, employeeController.getemployeeById);
router.post('/', employeeController.createemployee);
router.put('/:id', authorizeToken, employeeController.updateemployee);
router.delete('/:id', authorizeToken, employeeController.deleteemployee);


module.exports = router;