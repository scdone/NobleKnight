
import './App.css';
import { BrowserRouter, Route, Switch, render } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Layout from './components/Layout';


import axios from 'axios';


function enterGame(e) {
  e.preventDefault()

}


function App() { 
  return (
     <main>
        <switch>
          <div className="app flex-col-center">
            <Header />
            <Welcome />
          </div>
         </switch>
      </main>
   );
}

export default App;

