const express = require('express')
const UserRepository = require('./../../data/userRepository')
const UserService = require('./../../business/userService')

var router = express.Router()

router.get('/', (req, res) => {

    var ur = new UserRepository()
    var us = new UserService(ur)

    var data = us.get()

    res.send(data)

});

module.exports = router