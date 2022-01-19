
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


import axios from 'axios';


function enterGame(e) {
  e.preventDefault()

}


function App() { 
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
          <Route path="/getname" element={<GetPlayerName />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gameover" element={<GameOver />} />
          <Route path="/youwin" element={<YouWin />} />
        </Routes>
      </BrowserRouter>
   </div>
   );
}

export default App;

