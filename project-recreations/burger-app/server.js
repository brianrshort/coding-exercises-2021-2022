const express = require('express');
const mysql = require('mysql2');
const app = express();
const routes = require("./controller/burger_controller");

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on " + PORT);
});


