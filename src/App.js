
import './App.css';
import { BrowserRouter, Route, Switch, render } from 'react-router-dom';
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
    <Header />
     <main>
       <BrowserRouter>
        <switch>
            <Welcome />
        </switch>
      </BrowserRouter>
    </main>
   </div>
   );
}

export default App;

