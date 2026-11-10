const ApiError = require('../error/ApiError')

class UserController {
    async Registration (req, res ) {

    }

    async Login (req, res ) {
        
    }

    async Check (req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('не задан Id')) 
        }
        res.json(id)
    }

}

module.exports = new UserController()