const e = require('express');
const express = require('express');
const router = express.Router();
const str = [
    {   
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@accenture.com",
        "location": "Riga/Latvia",
        "age": 29,
        "joined": "2019/12/12"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@accenture.com",
        "location": "Moscow/Russia",
        "age": 35,
        "joined": "2018/02/11"
    },
    {
        "id": 3,
        "name": "Adam Doe",
        "email": "adam.doe@accenture.com",
        "location": "London/U.K",
        "age": 30,
        "joined": "2019/03/10"
    },
    {
        "id": 4,
        "name": "Mountain Doe",
        "email": "mountain.doe@accenture.com",
        "location": "Paris/France",
        "age": 28,
        "joined": "2021/06/20"
    }
];

router.get('/contacts', (req, res) => {
    res.end(JSON.stringify(str));
});

router.get('/contacts/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    let contact = str.filter((object) => {
        return object["id"] == id
    });
    console.log(contact[0]);
    res.end(JSON.stringify(contact[0]));
});

module.exports = router;