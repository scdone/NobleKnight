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

let newGameId = 7

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
        },

    //login
    //register
    //logout
    //getUserHistory
    getPlayerHistory: (req, res) => {
        const { id } = req.session.user
        sequelize.query(`SELECT game_date, knight_name, score
        FROM playthroughs 
        WHERE user_id = ${id};`)

        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    //getLeaderboard
    getLeaderboard: (req, res) => {
        sequelize.query(`SELECT playthroughs.game_date, users.username, playthroughs.score
        FROM playthroughs
        JOIN users
        ON playthroughs.user_id = users.id
        ORDER BY score desc
        LIMIT 5;`)

        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    //saveGame
    saveGame: (req, res) => {
        const { id, game_date, knight_name, score } = req.session

        let newSavedGame = {
            "game_id": newGameId,
            "user_id": id,
            "game_date": game_date,
            "knight_name": knight_name,
            "score": score
        }

        //// dbData? db?
        db.push(newSavedGame)

        res.status(200).send(newSavedGame)
    }
    //getAllUsers

    //(getAllUsers function below was used as a test)
    // getAllUsers: (req, res) => {
    //     sequelize.query(`SELECT * FROM users`)
    //     .then (dbRes => res.status(200).send(dbRes[0]))
    //     .catch(err => console.log(err))
    // }
}


/////////////////////////////////////////////////////////
// test random event function 

// let allEvents = []
// let firstEvent = [1]
// let events = [2, 3, 4, 5, 6, 7, 8]
// let lastEvents = [9, 10]


// function randomizeEvents(arr) {
//   for(let i = arr.length - 1; i > 0; i--){
//   let j = Math.floor(Math.random() * (i+1));
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr
// }

// let randomEvents = randomizeEvents(events)

// allEvents.push(firstEvent)
// allEvents.push(randomEvents)
// allEvents.push(lastEvents)

// console.log(allEvents)
////////////////////////////////////////////////////////