// loginrouter.js

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontroller'); // Corrected import

router.post('/login', loginController.loginUser);

module.exports = router;

