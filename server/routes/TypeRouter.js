const express = require('express')
const router = express.Router()

const TypeController = require('../Controllers/TypeController')

router.post('/', TypeController.Create)
router.get('/', TypeController.GetAll)

module.exports = router