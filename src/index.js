import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PlayerHistory from './components/PlayerHistory';
import GetPlayerName from './components/GetPlayerName';
import Events from './components/Events';
import GameOver from './components/GameOver';
import YouWin from './components/YouWin';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
