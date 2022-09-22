const express = require('express');
const router = express.Router();
const app = express();
const adminController = require('../controllers/adminController.js');
const authorizeToken = require('../middlewares/authJWT.js');

router.post('/admin', adminController.authAdmin);

module.exports = router;