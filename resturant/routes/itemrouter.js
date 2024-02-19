const express = require('express');
const router = express.Router();
const itemcontroller = require('../controllers/itemcontroller'); // Corrected import

router.get('/items', itemcontroller.getAllItems);
router.get('/items/:id', itemcontroller.getItemById);
router.post('/items', itemcontroller.createItem);
router.put('/items/:id', itemcontroller.updateItem);
router.delete('/items/:id', itemcontroller.deleteItem);

module.exports = router; 


