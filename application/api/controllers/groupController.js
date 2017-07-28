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


router.get('/parent/:id', (req, res) => {

    var groupService = global.ioc.get('groupService')
    
    groupService.getByParent(req.params.id)
                .then(groups => {
                    res.send(groups)
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

                    if (err.constructor.name === 'BusinessError') {
                        res.status(400).send(err)
                        return
                    }

                    res.status(500).send(err)

                })
})

router.put('/', (req, res) => {
    
    var groupService = global.ioc.get('groupService')
    
    var group = req.body

    groupService.update(group)
                .then(rows => {
                    res.send({ rows, group })
                })
                .catch(err => {

                    if (err.constructor.name === 'BusinessError') {
                        res.status(400).send(err)
                        return
                    }

                    res.status(500).send(err)

                })
})

router.delete('/:id', (req, res) => {
    
    var groupService = global.ioc.get('groupService')

    groupService.delete(req.params.id)
                .then(rows => {
                    res.send({ rows })
                })
                .catch(err => {

                    if (err.constructor.name === 'BusinessError') {
                        res.status(400).send(err)
                        return
                    }

                    res.status(500).send(err)

                })
})

module.exports = router