const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async Create (req, res ) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async GetAll (req, res ) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async Delete (req, res ) {
        
    }


}

module.exports = new TypeController()