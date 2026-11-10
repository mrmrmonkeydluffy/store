const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/UserController')

router.post('/registration', UserController.Registration)
router.post('/login', UserController.Login)
router.get('/auth', UserController.Check)

module.exports = router