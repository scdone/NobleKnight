
import './App.css';
import React, {component} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Layout from './components/Layout';


import axios from 'axios';
import reactDom from 'react-dom';

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

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)