const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async Create (req, res ) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async GetAll (req, res ) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async Delete (req, res ) {
        
    }

}

module.exports = new BrandController()