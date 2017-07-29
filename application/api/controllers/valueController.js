const express = require('express')
const util = require('../../util')
const ioc = require('../../util/ioc')

var router = express.Router()

router.get('/:id', (req, res) => {

    var valueService = ioc.get('valueService')
    
    valueService.get(req.params.id)
                    .then(value => {
                        res.send(value)
                    })
                    .catch(err => {
                        util.handleError(res, err)
                    })
})

router.get('/indicator/:id', (req, res) => {

    var valueService = ioc.get('valueService')
    
    valueService.getByGroup(req.params.id)
                    .then(values => {
                        res.send(values)
                    })
                    .catch(err => {
                        util.handleError(res, err)
                    })
})

router.post('/', (req, res) => {
    
    var valueService = ioc.get('valueService')
    
    valueService.save(req.body)
                .then(value => {
                    res.send(value)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.put('/', (req, res) => {
    
    var valueService = ioc.get('valueService')
    
    var value = req.body

    valueService.update(value)
                .then(rows => {
                    res.send({ rows, value })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.delete('/:id', (req, res) => {
    
    var valueService = ioc.get('valueService')

    valueService.delete(req.params.id)
                .then(rows => {
                    res.send({ rows })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

module.exports = router