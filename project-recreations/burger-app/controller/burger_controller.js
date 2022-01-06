const express = require("express");
const router = express.Router();
const connection = require('../config/connection');

router.get("/", (req, res) => {
    let string = `SELECT * FROM burgers`;
    connection.query(string, (err, response) => {
        console.log(response);
        res.send(response);
    })
})

router.post('/', (req, res) => {
    let string = `INSERT INTO burgers (burger) VALUES ("${req.body.burger}")`;
    connection.query(string, (err, response) => {
        console.log(response);
        res.send(response);
    })
})

module.exports = router;