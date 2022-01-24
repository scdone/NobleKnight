import './App.css';
import { BrowserRouter, Route, Switch, render, Routes } from 'react-router-dom';
import Header from './components/Header';
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

  function getLeaderboardFront() {
    axios.get('/api/leaderboard')
        .then(res => {
          console.log(res.data)
          setLeaderboard(res.data[0])})
  }

  useEffect(()=>{getLeaderboardFront()}, [])





  return (
    <div className="app flex-col-center">
      <header>
        <h1 className="title">Noble Knight</h1>
        </header>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/playerhistory" element={<PlayerHistory />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/getname" element={<GetPlayerName setEvents={setEvents} playerName={playerName} setPlayerName={setPlayerName}  />} />
          <Route path="/events" element={<Events events={events} index={index}setIndex={setIndex} userInput={userInput} setUserInput={setUserInput} playerName={playerName}/>} />
          <Route path="/choices" element={<Choices events={events} index={index} setIndex={setIndex} score={score} setScore={setScore} userInput={userInput} setUserInput={setUserInput} />} />
          <Route path="/gameover" element={<GameOver score={score} leaderboard={leaderboard}/>} />
          <Route path="/youwin" element={<YouWin score={score} playerName={playerName} leaderboard={leaderboard} />} />
        </Routes>
      </BrowserRouter>
   </div>
   );
}

export default App;

