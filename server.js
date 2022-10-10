const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3031
app.use(express.json())


app.get('/', (req, res) => res.json("Det funkar!"))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

require('dotenv').config()


console.log(process.env.URL)

mongoose.connect(process.env.URL)
const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
})

db.on('open', () => console.log('Connected to database!'))


//Importerar routes
const servicesRouter = require('./routes/services')
app.use('/services', servicesRouter)

const ordersRouter = require('./routes/orders')
app.use('/orders', ordersRouter)

