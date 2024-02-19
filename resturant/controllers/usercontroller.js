const client = require('../database/connection');

const getAllUsers = (req, res) => {
    client.query('SELECT id, firstname, lastname, email, location, type FROM users', (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};

const getUserById = (req, res) => {
    client.query(`SELECT id, firstname, lastname, email, location, type FROM users WHERE id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            res.status(500).send(err.message);
        }
    });
};
const createUser = (req, res) => {
    const user = req.body;
    const insertQuery = `INSERT INTO public.users(firstname, lastname, email, location, type, password) 
                         VALUES('${user.firstname}', '${user.lastname}', '${user.email}', '${user.location}', '${user.type}', '${user.password}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};


const updateUser = (req, res) => {
    const user = req.body;
    const updateQuery = `UPDATE users
                         SET firstname = '${user.firstname}',
                         lastname = '${user.lastname}',
                         email = '${user.email}',
                         location = '${user.location}',
                         type = '${user.type}'
                         WHERE id = ${user.id}`;

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

const deleteUser = (req, res) => {
    const deleteQuery = `DELETE FROM users WHERE id=${req.params.id}`;

    client.query(deleteQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
