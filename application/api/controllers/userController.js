const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {

    var data = [{ name: 'John' }, { name: 'Paul' }, { name: 'George' }, { name: 'Ringo' }]

    res.send(data)

});

module.exports = router