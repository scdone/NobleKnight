import './App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PlayerHistory from './components/PlayerHistory';
import GetPlayerName from './components/GetPlayerName';
import Events from './components/Events';
import GameOver from './components/GameOver';
import YouWin from './components/YouWin';
import Choices from './components/Choices';

import React, { useState, useEffect } from 'react'; 

import axios from 'axios';


function App() {
  const [events, setEvents] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [leaderboard, setLeaderboard] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


  function getLeaderboardFront() {
    axios.get('/api/leaderboard')
        .then(res => {
          setLeaderboard(res.data[0])})
  }

  useEffect(()=>{getLeaderboardFront()}, [])

  function saveGameFront() {
    const body = {
      user_id: user.id,
      knight_name: playerName,
      score: score
    }

    axios.post('/api/saveGame', body)
      .then(res => {
        console.log(res)
      }) 
  }


  if(loading) {
    return(
      <div className="app flex-col-center">
      <header>
        <h1 className="title">Noble Knight</h1>
        </header>
        <h1 className='h1'>loading . . . . </h1>
      </div>

    )
  } else {
  return (
    <div className="app flex-col-center">
      <header>
        <h1 className="title">Noble Knight</h1>
        </header>
        <Switch>
          <Route path="/login" render={()=><Login user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/playerhistory" render={()=><PlayerHistory user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/createaccount" render={()=><CreateAccount setUser={setUser} loading={loading} setLoading={setLoading} />} />
          <Route path="/getname" render={()=><GetPlayerName setEvents={setEvents} playerName={playerName} setPlayerName={setPlayerName}  />} />
          <Route path="/events" render={()=><Events events={events} index={index}setIndex={setIndex} userInput={userInput} setUserInput={setUserInput} playerName={playerName}/>} />
          <Route path="/choices" render={()=><Choices events={events} index={index} setIndex={setIndex} score={score} setScore={setScore} userInput={userInput} setUserInput={setUserInput} />} />
          <Route path="/gameover" render={()=><GameOver setEvents={setEvents} saveGameFront={saveGameFront} setPlayerName={setPlayerName} setScore={setScore} setIndex={setIndex} score={score} leaderboard={leaderboard} user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/youwin" render={()=><YouWin setEvents={setEvents} saveGameFront={saveGameFront} setPlayerName={setPlayerName} setScore={setScore} setIndex={setIndex} score={score} playerName={playerName} leaderboard={leaderboard} user={user} setUser={setUser} loading={loading} setLoading={setLoading} />} />
          <Route path="/" render={()=><Welcome />} />
        </Switch>
   </div>
   );
  }
}

export default App;

