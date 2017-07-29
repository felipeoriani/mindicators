module.exports = {

    handleError: (res, err) => {
        
        var status = err.constructor.name === 'BusinessError' ? 400 : 500
        
        res.status(status).send(err)
    }

}