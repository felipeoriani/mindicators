const express = require('express')
const util = require('../../util')
const ioc = require('../../util/ioc')

var router = express.Router()

router.get('/', (req, res) => {

    var groupService = ioc.get('groupService')
    
    groupService.getAll()
                .then(groups => {
                    res.send(groups)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.get('/:id', (req, res) => {

    var groupService = ioc.get('groupService')
    
    groupService.get(req.params.id)
                .then(group => {
                    res.send(group)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})


router.get('/parent/:id', (req, res) => {

    var groupService = ioc.get('groupService')
    
    groupService.getByParent(req.params.id)
                .then(groups => {
                    res.send(groups)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.post('/', (req, res) => {
    
    var groupService = ioc.get('groupService')
    
    groupService.save(req.body)
                .then(group => {
                    res.send(group)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.put('/', (req, res) => {
    
    var groupService = ioc.get('groupService')
    
    var group = req.body

    groupService.update(group)
                .then(rows => {
                    res.send({ rows, group })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.delete('/:id', (req, res) => {
    
    var groupService = ioc.get('groupService')

    groupService.delete(req.params.id)
                .then(rows => {
                    res.send({ rows })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

module.exports = router
