require('dotenv').config();

const sequelize = require('./db.js')
const express = require('express')
const path = require ('node:path')
const models = require('./models/models.js')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const ErrorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(ErrorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (error){
        console.log(error)
    }
}

start()