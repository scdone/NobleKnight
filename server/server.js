const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const { SERVER_PORT } = process.env


const ctrl = require('./controller')


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });

app.get('/allEvents', ctrl.getAllEvents)
app.get('/api/playerHistory/:id', ctrl.getPlayerHistory)
app.get('/api/leaderboard', ctrl.getLeaderboard)

app.post('/api/saveGame', ctrl.saveGame)

// app.get('/allUsers', ctrl.getAllUsers) -- this was a test




app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))