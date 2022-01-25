const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()

const { SERVER_PORT, SESSION_SECRET } = process.env


const ctrl = require('./controller')

app.use(express.json())
app.use(cors())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUnititialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 72
  }
}))
app.use(express.static(`${__dirname}/../build`))

app.get('/allEvents', ctrl.getAllEvents)
app.get('/api/playerhistory', ctrl.getPlayerHistory)
app.get('/api/leaderboard', ctrl.getLeaderboard)
app.post('/api/saveGame', ctrl.saveGame)

app.post(`/auth/createAccount`, ctrl.createAccount)
app.post(`/auth/login`, ctrl.login)
app.get(`/auth/logout`, ctrl.logout)




app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))