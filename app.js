const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You respond in a short, very conversational friendly style!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
