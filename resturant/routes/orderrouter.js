// orderrouter.js
const express = require('express');
const router = express.Router();
const ordercontroller = require('../controllers/ordercontroller'); // Corrected import

router.get('/orders', ordercontroller.getAllOrders);
router.get('/orders/:id', ordercontroller.getOrderById);
router.post('/orders', ordercontroller.createOrder);
router.put('/orders/:id', ordercontroller.updateOrder);
router.delete('/orders/:id', ordercontroller.deleteOrder);

module.exports = router; // Corrected export
