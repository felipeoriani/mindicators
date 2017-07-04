const express = require('express')
const ioc = global.ioc;

var router = express.Router()

router.get('/', (req, res) => {

    var userService = ioc.get('userService');
    
    var data = userService.get()

    res.send(data)

});

module.exports = router