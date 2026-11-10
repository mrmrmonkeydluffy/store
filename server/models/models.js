const { toDefaultValue } = require('sequelize/lib/utils')
const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Email: {type: DataTypes.STRING, unique: true, allowNull: false},
    Password: {type: DataTypes.STRING, allowNull: false},
    Role: {type: DataTypes.STRING, DefaultValue:'User'}
})
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Basket_device = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.DOUBLE, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: true}
})
const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, defaultValue: 0}
})
const Device_info = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Type_brand = sequelize.define('type_brand', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(Basket_device)
Basket_device.belongsTo(Basket)

Type.hasMany(Device, {foreignKey: 'typeId'})
Device.belongsTo(Type, {foreignKey: 'typeId'})

Brand.hasMany(Device, {foreignKey: 'brandId'})
Device.belongsTo(Brand, {foreignKey: 'brandId'})

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(Basket_device)
Basket_device.belongsTo(Device)

Device.hasMany(Device_info)
Device_info.belongsTo(Device)

Type.belongsToMany(Brand, {through: Type_brand})
Brand.belongsToMany(Type, {through: Type_brand})

module.exports = {
    User, 
    Basket, 
    Basket_device, 
    Device, 
    Type, 
    Brand, 
    Rating, 
    Device_info, 
    Type_brand
}