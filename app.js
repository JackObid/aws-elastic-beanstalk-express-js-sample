const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Your respond in a short one and its conversational friendly style!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
