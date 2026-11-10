const express = require('express')
const router = express.Router()

const BrandRouter = require('./BrandRouter');
const UserRouter = require('./UserRouter');
const DeviceRouter = require('./DeviceRouter');
const TypeRouter = require('./TypeRouter');

router.use('/brand', BrandRouter);
router.use('/user', UserRouter);
router.use('/device', DeviceRouter);
router.use('/type', TypeRouter);

module.exports = router