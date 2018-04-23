const path = require('path');
const express = require('express');
const app = express();
const getPath = path.join(__dirname, '..');
const port = 8080;

app.use(express.static(getPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(getPath, 'index.html'));
});

app.listen(port, () => {
    console.log("Express server is running...");
});
