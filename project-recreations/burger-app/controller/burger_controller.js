const express = require("express");
const router = express.Router();
const connection = require('../config/connection');
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
})


router.get("/get/", (req, res) => {
    let string = `SELECT * FROM burgers`;
    connection.query(string, (err, response) => {
        //console.log(response);
        res.send(response);
    })
})

router.post('/post/', (req, res) => {
    let string = `INSERT INTO burgers (burger) VALUES ("${req.body.burger}")`;
    connection.query(string, (err, response) => {
        //console.log(response);
        res.send(response);
    })
})

router.put("/:id", (req, res) => {
    let string=`UPDATE burgers SET devoured=${req.body.devoured} WHERE id="${req.params.id}";`;
    console.log(string);
    connection.query(string, (err, response) => {
        //console.log(response);
        res.send(response);
    });
})

router.delete('/:id', (req, res) => {
    let string = `DELETE FROM burgers WHERE id="${req.params.id}"`;
    connection.query(string, (err, response) => {
        //console.log(response);
        res.send(response);
    });
})

module.exports = router;