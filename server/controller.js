const { allEvents, firstEvent, events, lastEvents } = require('./events')

require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

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

        allEvents.push(firstEvent[0])
        randomEvents.forEach((evt) => {
            allEvents.push(evt)
        })
        allEvents.push(lastEvents[0], lastEvents[1]);

        res.status(200).send(allEvents)
        },

    //create new account
    createAccount: async (req, res) => {
        try {
            const { username, password } = req.body
            const existingUser = await sequelize.query(`SELECT * FROM users
            WHERE username = '${username}'`)

            if(existingUser[0][0]) {
                return res.status(409).send('username already exists')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let user = await sequelize.query(`INSERT INTO users
            (username, password)
            VALUES ('${username}', '${hash}')
            RETURNING *;`)

            user = user[0][0]
            delete user.password

            req.session.user = user

            res.status(200).send(req.session.user)

        } catch (error) {
            console.log(error)            
        }
    },
    //login
    


    //logout


    //get user's previous games
    getPlayerHistory: async (req, res) => {
        const { id } = req.session.user
        const previousGames = await sequelize.query(`SELECT game_date, knight_name, score
        FROM playthroughs 
        WHERE user_id = ${id};`)

        res.status(200).send(previousGames)
    },

    //get leaderboard from database
    getLeaderboard: async (req, res) => {
        const leaderboard = await sequelize.query(`SELECT playthroughs.game_date, users.username, playthroughs.game_id, playthroughs.score
        FROM playthroughs
        JOIN users
        ON playthroughs.user_id = users.id
        ORDER BY score desc
        LIMIT 5;`)

         console.log(leaderboard)

        res.status(200).send(leaderboard)
    },
    //save game
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