var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/datos', function (req, res, next) {
    const answer = {
        name: "Juan",
        lastName: "Perez",
        age: "30",
        email: "Juan.perez@gmail.com",
        phone: "123456789",
        address: "Calle falsa 123",
        city: "Armenia",
    };
 res.json(answer);
});

module.exports = router;
