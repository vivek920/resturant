const express = require('express');
const bodyParser = require('body-parser');
const router = require('./resturant/routes/router');
const app = express();

app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Server is now listening at http://localhost:${PORT}`);
});
