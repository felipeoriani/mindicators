const express = require('express')
const util = require('../../util')
const ioc = require('../../util/ioc')

var router = express.Router()

router.get('/:id', (req, res) => {

    var indicatorService = ioc.get('indicatorService')
    
    indicatorService.get(req.params.id)
                    .then(indicator => {
                        res.send(indicator)
                    })
                    .catch(err => {
                        util.handleError(res, err)
                    })
})

router.get('/group/:id', (req, res) => {

    var indicatorService = ioc.get('indicatorService')
    
    indicatorService.getByGroup(req.params.id)
                    .then(indicators => {
                        res.send(indicators)
                    })
                    .catch(err => {
                        util.handleError(res, err)
                    })
})

router.post('/', (req, res) => {
    
    var indicatorService = ioc.get('indicatorService')
    
    indicatorService.save(req.body)
                .then(indicator => {
                    res.send(indicator)
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.put('/', (req, res) => {
    
    var indicatorService = ioc.get('indicatorService')
    
    var indicator = req.body

    indicatorService.update(indicator)
                .then(rows => {
                    res.send({ rows, indicator })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

router.delete('/:id', (req, res) => {
    
    var indicatorService = ioc.get('indicatorService')

    indicatorService.delete(req.params.id)
                .then(rows => {
                    res.send({ rows })
                })
                .catch(err => {
                    util.handleError(res, err)
                })
})

module.exports = router