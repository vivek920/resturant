// logincontroller.js

const client = require('../database/connection');

const loginUser = (req, res) => {
    const { email, password } = req.body;
    
    // Check if the user exists with the provided email
    const query = `SELECT * FROM users WHERE email='${email}'`;
    client.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            if (result.rows.length === 0) {
                res.status(400).send('Invalid email');
            } else {
                const user = result.rows[0];
                if (user.password === password) {
                    res.send('User login successfully');// Login successful
                  
                } else {
                    res.status(400).send('Invalid password'); // Incorrect password
                }
            }
        }
    });
};

module.exports = { loginUser };


