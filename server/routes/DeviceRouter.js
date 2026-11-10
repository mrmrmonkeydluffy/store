const express = require('express')
const router = express.Router()

const DeviceController = require('../Controllers/DeviceController')

router.post('/', DeviceController.Create)
router.get('/', DeviceController.GetAll)
router.get('/', DeviceController.GetOne)

module.exports = router