const express = require('express');
const mysql = require('mysql2');
const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server listening on " + PORT);
});


