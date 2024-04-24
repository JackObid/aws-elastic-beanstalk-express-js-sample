const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The zebra leading the lion on a wild chase through the tall grass!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
