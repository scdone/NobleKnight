const { allEvents, firstEvent, events, lastEvents } = require('./events')

require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    //getAllEvents
    getAllEvents: (req, res) => {
        function randomizeEvents(arr) {
            for(let i = arr.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr
        }
        let randomEvents = randomizeEvents(events);

        allEvents.push(firstEvent)
        allEvents.push(randomEvents)
        allEvents.push(lastEvents);

        res.status(200).send(allEvents)
        }

    //login
    //register
    //logout
    //getUserHistory
    //getLeaderboard
    //saveGame
    //getAllUsers

    //(getAllUsers function below was used as a test)
    // getAllUsers: (req, res) => {
    //     sequelize.query(`SELECT * FROM users`)
    //     .then (dbRes => res.status(200).send(dbRes[0]))
    //     .catch(err => console.log(err))
    // }
}