const express = require('express')

var router = express.Router()

router.get('/', (req, res) => {

    var userService = global.ioc.get('userService')
    
    userService.get()
                .then(users => {
                    res.send(users)
                })
                .catch(err => {
                    res.status(400).send(err)
                })

})

module.exports = router