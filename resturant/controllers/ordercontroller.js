// restaurant/controllers/orderController.js
const client = require('../database/connection');

const getAllOrders = (req, res) => {
    client.query('SELECT * FROM "order"', (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};

const getOrderById = (req, res) => {
    client.query(`SELECT * FROM "order" WHERE id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};

const createOrder = (req, res) => {
    const order = req.body;
    const insertQuery = `INSERT INTO "order" (user_id, item_id, quantity, datetime) 
                         VALUES (${order.user_id}, ${order.item_id}, ${order.quantity}, '${order.datetime}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

const updateOrder = (req, res) => {
    const order = req.body;
    const updateQuery = `UPDATE "order"
                         SET user_id = ${order.user_id},
                         item_id = ${order.item_id},
                         quantity = ${order.quantity},
                         datetime = '${order.datetime}'
                         WHERE id = ${req.params.id}`;

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

const deleteOrder = (req, res) => {
    const deleteQuery = `DELETE FROM "order" WHERE id=${req.params.id}`;

    client.query(deleteQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};
