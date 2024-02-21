const {Client} = require('pg')

const client = new Client({
    host: "192.168.1.15",
    user: "postgres",
    port: 5432,
    password: "mysecretpassword",
    database: "new"
})
client.connect();
module.exports = client