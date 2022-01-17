const express = require('express')
const cors = require('cors')

const app = express()

const ctrl = require('./controller')

app.use(express.json)
app.use(cors())








app.listen(4000, () => console.log('up on 4000'))