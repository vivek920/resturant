// index.js

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./resturant/routes/router');
const itemrouter = require('./resturant/routes/itemrouter');
const orderrouter = require('./resturant/routes/orderrouter');
const registerRouter = require('./resturant/routes/registerrouter');
const loginRouter = require('./resturant/routes/loginrouter'); // Corrected import
const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.use('/', itemrouter);
app.use('/', orderrouter);
app.use('/', registerRouter);
app.use('/', loginRouter); // Include the login router

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Server is now listening at http://localhost:${PORT}`);
});


