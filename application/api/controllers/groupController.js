const express = require('express')

var router = express.Router()

router.get('/', (req, res) => {

    var groupService = global.ioc.get('groupService')
    
    groupService.getAll()
                .then(groups => {
                    res.send(groups)
                })
                .catch(err => {
                    res.status(400).send(err)
                })
})

router.get('/:id', (req, res) => {

    var groupService = global.ioc.get('groupService')
    
    groupService.get(req.params.id)
                .then(group => {
                    res.send(group)
                })
                .catch(err => {
                    res.status(400).send(err)
                })
})

router.post('/', (req, res) => {
    
    var groupService = global.ioc.get('groupService')
    
    groupService.save(req.body)
                .then(group => {
                    res.send(group)
                })
                .catch(err => {
                    res.status(400).send(err.validation)
                })
})

module.exports = router