import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PlayerHistory from './components/PlayerHistory';
import GetPlayerName from './components/GetPlayerName';
import Events from './components/Events';
import GameOver from './components/GameOver';
import YouWin from './components/YouWin';
import Choices from './components/Choices';

import { useState, useEffect } from 'react'; 


import axios from 'axios';


function enterGame(e) {
  e.preventDefault()

}


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
          console.log(res.data)
          setLeaderboard(res.data[0])})
  }

  useEffect(()=>{getLeaderboardFront()}, [])


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
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/playerhistory" element={<PlayerHistory user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/createaccount" element={<CreateAccount setUser={setUser} loading={loading} setLoading={setLoading} />} />
          <Route path="/getname" element={<GetPlayerName setEvents={setEvents} playerName={playerName} setPlayerName={setPlayerName}  />} />
          <Route path="/events" element={<Events events={events} index={index}setIndex={setIndex} userInput={userInput} setUserInput={setUserInput} playerName={playerName}/>} />
          <Route path="/choices" element={<Choices events={events} index={index} setIndex={setIndex} score={score} setScore={setScore} userInput={userInput} setUserInput={setUserInput} />} />
          <Route path="/gameover" element={<GameOver setPlayerName={setPlayerName} setScore={setScore} setIndex={setIndex} score={score} leaderboard={leaderboard} user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
          <Route path="/youwin" element={<YouWin setPlayerName={setPlayerName} setScore={setScore} setIndex={setIndex} score={score} playerName={playerName} leaderboard={leaderboard} user={user} setUser={setUser} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </BrowserRouter>
   </div>
   );
  }
}

export default App;

