const client = require('../database/connection');

const registerUser = (req, res) => {
    const user = req.body;
    const insertQuery = `INSERT INTO users(firstname, lastname, email, location, type, password) 
                         VALUES('${user.firstname}', '${user.lastname}', '${user.email}', '${user.location}', '${user.type}', '${user.password}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Registration was successful');
        } else {
            res.status(500).send(err.message);
        }
    });
};

module.exports = { registerUser };
