const express = require('express')
const router = express.Router()

const BrandController = require('../Controllers/BrandController')

router.get('/', BrandController.GetAll)
router.post('/', BrandController.Create)
router.delete('/:id',BrandController.Delete)

module.exports = router;