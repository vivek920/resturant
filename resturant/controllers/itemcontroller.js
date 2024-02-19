// restaurant/controllers/itemController.js
const client = require('../database/connection');

const getAllItems = (req, res) => {
    client.query('SELECT * FROM item', (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};

const getItemById = (req, res) => {
    client.query(`SELECT * FROM item WHERE id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};

const createItem = (req, res) => {
    const item = req.body;
    const insertQuery = `INSERT INTO item (name, price, description, quantity) 
                         VALUES ('${item.name}', ${item.price}, '${item.description}', ${item.quantity})`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

const updateItem = (req, res) => {
    const item = req.body;
    const updateQuery = `UPDATE item
                         SET name = '${item.name}',
                         price = ${item.price},
                         description = '${item.description}',
                         quantity = ${item.quantity}
                         WHERE id = ${req.params.id}`;

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

const deleteItem = (req, res) => {
    const deleteQuery = `DELETE FROM item WHERE id=${req.params.id}`;

    client.query(deleteQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
