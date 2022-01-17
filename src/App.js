
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome';


import axios from 'axios'


function App() {
  return (
    <div className="app flex-col-center">
      <Header />
      <Welcome />
   
      
    </div>
  );
}

export default App;
