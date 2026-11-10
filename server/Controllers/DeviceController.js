const {Device, Device_info} = require('../models/models')
const ApiError = require('../error/ApiError')
const { randomUUID } = require('node:crypto');
const path = require('node:path');

class DeviceController {

    async Create (req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        const fileName = randomUUID() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const device = await Device.create({name, price, brandId, typeId, img: fileName})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i => 
                Device_info.create({
                    title: i.title,
                    description: i.description, 
                    deviceId: device.id
                })
            );
        }

        return res.json(device)

        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async GetAll (req, res ) {
        const {brandId, typeId } = req.query

        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10
        const offset = (page-1) * limit


        const where= {}

        if (brandId) {
            where.brandId = brandId;
        }

        if (typeId) {
            where.typeId = typeId
        }
        const device = await Device.findAndCountAll({where, limit, offset})
            return res.json(device)

    }

    async GetOne (req, res ) {
        
    }

}

module.exports = new DeviceController()