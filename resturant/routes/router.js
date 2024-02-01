const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller'); // Corrected import

router.get('/users', usercontroller.getAllUsers);
router.get('/users/:id', usercontroller.getUserById);
router.post('/users', usercontroller.createUser);
router.put('/users/:id', usercontroller.updateUser);
router.delete('/users/:id', usercontroller.deleteUser);

module.exports = router;

