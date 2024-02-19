// registerrouter.js

const express = require('express');
const router = express.Router();
const registercontroller = require('../controllers/registercontroller'); // Corrected import

router.post('/register', registercontroller.registerUser);

module.exports = router;
