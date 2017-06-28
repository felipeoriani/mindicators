
module.exports.init = function(server) {

    server.get('/users', function (req, res, next) {

        var data = [{ name: 'John' }, { name: 'Paul' }, { name: 'George' }, { name: 'Ringo' }]

        res.send(data)

        return next()
    })

}
